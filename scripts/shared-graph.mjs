import {mkdir, readFile, writeFile} from 'node:fs/promises'
import {dirname, join, relative} from 'node:path'
import {parse} from '../node_modules/terser/lib/parse.js'
import {TreeWalker, AST_SimpleStatement} from '../node_modules/terser/lib/ast.js'
import '../node_modules/terser/lib/scope.js'
import '../node_modules/terser/lib/output.js'

const print = node => node.print_to_string({beautify:true, preserve_annotations:true, comments:'all'})
const functionNode = node => ['Defun','Function','Arrow','Accessor'].includes(node.TYPE)

// The package declares sideEffects:false. Keep definitions and every statement
// that initializes/mutates them together; share those bindings across all public
// entry points. This is a linker for one compiled module, not repeated compiles.
export async function splitSharedGraph(file, directory) {
  const source = await readFile(file, 'utf8')
  const ast = parse(source, {module:true})
  ast.figure_out_scope()
  const nodes=[], owner=new Map(), foreign=new Map(), exports=[]
  const topDef = symbol => symbol?.definition?.()?.scope === ast ? symbol.definition() : null
  function add(node, code, declarations=[]) {
    const id=nodes.length
    nodes.push({node, code, declarations, dependencies:new Set(), reads:new Set(), writes:new Set(), initializes:new Set()})
    for(const definition of declarations) {
      if(owner.has(definition)) throw new Error(`Multiple declarations for ${definition.name}`)
      owner.set(definition,id)
    }
  }
  for(const statement of ast.body) {
    if(statement.TYPE==='Import') {
      if(statement.imported_name || !statement.imported_names?.length) throw new Error('Shared graph requires named foreign imports')
      for(const name of statement.imported_names) {
        const definition=topDef(name.name)
        foreign.set(definition,{name:name.name.name, imported:name.foreign_name.name, path:statement.module_name.value})
      }
    } else if(statement.TYPE==='Export') {
      if(statement.exported_definition || statement.exported_value || statement.module_name) throw new Error('Shared graph requires trailing named exports')
      for(const name of statement.exported_names) exports.push({name:name.foreign_name.name, definition:topDef(name.name)})
    } else if(['Var','Let','Const'].includes(statement.TYPE)) {
      for(const declaration of statement.definitions) {
        const definition=topDef(declaration.name)
        if(!definition) throw new Error('Shared graph requires simple top-level bindings')
        add(declaration,`${statement.TYPE.toLowerCase()} ${print(declaration)};`,[definition])
      }
    } else if(['Defun','DefClass'].includes(statement.TYPE)) {
      add(statement,print(statement),[topDef(statement.name)])
    } else if(statement.TYPE!=='EmptyStatement' && statement.TYPE!=='Directive') {
      // Comma sequences retain their evaluation order as separate statements.
      const expressions=[]
      function flatten(node) {if(node.TYPE==='Sequence')node.expressions.forEach(flatten);else expressions.push(node)}
      if(statement.TYPE==='SimpleStatement') {
        flatten(statement.body)
        for(const expression of expressions) add(expression,print(new AST_SimpleStatement({body:expression})))
      } else add(statement,print(statement))
    }
  }
  const baseDefinition = node => {
    while(node && ['Dot','Sub'].includes(node.TYPE))node=node.expression
    return node?.TYPE==='SymbolRef' ? topDef(node) : null
  }
  for(const item of nodes) {
    // All reads, including deferred function bodies, determine import edges.
    item.node.walk(new TreeWalker(function(node) {
      if(node.TYPE==='SymbolRef') {const definition=topDef(node);if(definition)item.reads.add(definition)}
      if(node.TYPE==='Assign' && node.left.TYPE==='SymbolRef') {
        const definition=topDef(node.left);if(definition)item.writes.add(definition)
      }
      if(['UnaryPrefix','UnaryPostfix'].includes(node.TYPE) && ['++','--'].includes(node.operator) && node.expression.TYPE==='SymbolRef') {
        const definition=topDef(node.expression);if(definition)item.writes.add(definition)
      }
    }))
    // Immediate mutations belong to the initialized object. Deferred property
    // writes can cross module boundaries; writes to a binding itself cannot.
    item.node.walk(new TreeWalker(function(node) {
      if(functionNode(node) || ['Class','DefClass'].includes(node.TYPE))return true
      if(node.TYPE==='Assign' && ['Dot','Sub'].includes(node.left.TYPE)) {
        const definition=baseDefinition(node.left);if(definition)item.initializes.add(definition)
      }
      if(node.TYPE==='Call') {
        if(['Dot','Sub'].includes(node.expression.TYPE)) {
          const definition=baseDefinition(node.expression);if(definition)item.initializes.add(definition)
        } else {
          // Foreign glue can initialize an argument (setProp, constructor
          // helpers). Retain such calls with all directly supplied bindings.
          for(const argument of node.args) {
            if(argument.TYPE==='SymbolRef') {const definition=topDef(argument);if(definition)item.initializes.add(definition)}
          }
        }
      }
    }))
  }
  // A top-level initializer can mutate a shared object through a local helper.
  // Follow that helper's immediate body; mere reads must not make the object
  // depend on unrelated setup that happens to use it.
  function calledInitializes(definition, seen = new Set()) {
    if (seen.has(definition)) return new Set()
    seen.add(definition)
    const item = nodes[owner.get(definition)]
    const fn = item?.node.TYPE === 'VarDef' ? item.node.value : item?.node
    const result = new Set()
    if (!fn || !functionNode(fn)) return result
    fn.walk(new TreeWalker(function(node) {
      if (node !== fn && (functionNode(node) || ['Class','DefClass'].includes(node.TYPE))) return true
      if (node.TYPE === 'Assign') {
        const target = baseDefinition(node.left)
        if (target) result.add(target)
      }
      if (node.TYPE === 'Call') {
        if (['Dot','Sub'].includes(node.expression.TYPE)) {
          const target = baseDefinition(node.expression)
          if (target) result.add(target)
        } else if (node.expression.TYPE === 'SymbolRef') {
          for (const target of calledInitializes(topDef(node.expression), seen)) result.add(target)
        }
      }
    }))
    return result
  }
  for (const item of nodes) {
    item.node.walk(new TreeWalker(function(node) {
      if (functionNode(node) || ['Class','DefClass'].includes(node.TYPE)) return true
      if (node.TYPE === 'Call' && node.expression.TYPE === 'SymbolRef') {
        for (const definition of calledInitializes(topDef(node.expression))) item.initializes.add(definition)
      }
    }))
  }
  // Reads made while initializing a module must observe the original order,
  // including reads performed by immediately called helpers. A read before a
  // later declaration/write cannot be turned into an eagerly initialized import.
  function eagerReads(node, seen = new Set()) {
    const result = new Set()
    node.walk(new TreeWalker(function(current) {
      if (current !== node && (functionNode(current) || ['Class','DefClass'].includes(current.TYPE))) return true
      if (current.TYPE === 'SymbolRef') {
        const definition = topDef(current)
        if (definition) result.add(definition)
      }
      if (current.TYPE === 'Call') {
        const definition = topDef(current.expression)
        if (definition && !seen.has(definition)) {
          const item = nodes[owner.get(definition)]
          const fn = item?.node.TYPE === 'VarDef' ? item.node.value : item?.node
          if (fn && functionNode(fn)) {
            const visited = new Set(seen).add(definition)
            for (const read of eagerReads(fn, visited)) result.add(read)
          }
        }
      }
    }))
    return result
  }
  const lastWrite = new Map()
  for (let id = 0; id < nodes.length; id++) {
    const item = nodes[id]
    for (const definition of item.declarations) lastWrite.set(definition, id)
    if (!functionNode(item.node) && !['Class','DefClass'].includes(item.node.TYPE)) {
      for (const definition of item.initializes) lastWrite.set(definition, id)
      // Deferred binding writes are already attached to their declaration;
      // only top-level assignments set the ordering constraint here.
      item.node.walk(new TreeWalker(function(node) {
        if (functionNode(node) || ['Class','DefClass'].includes(node.TYPE)) return true
        if (node.TYPE === 'Assign') {
          const definition = baseDefinition(node.left)
          if (definition) lastWrite.set(definition, id)
        }
      }))
    }
  }
  for (let id = 0; id < nodes.length; id++) {
    const item = nodes[id]
    if (functionNode(item.node) || ['Class','DefClass'].includes(item.node.TYPE)) continue
    for (const definition of eagerReads(item.node)) {
      if ((lastWrite.get(definition) ?? -1) > id) item.initializes.add(definition)
    }
  }
  const effects=[]
  for(let id=0;id<nodes.length;id++) {
    const item=nodes[id]
    for(const definition of item.reads) {const dependency=owner.get(definition);if(dependency!==undefined)item.dependencies.add(dependency)}
    let attached=item.declarations.length>0
    for(const definition of new Set([...item.writes,...item.initializes])) {
      const target=owner.get(definition)
      if(target!==undefined) {nodes[target].dependencies.add(id);item.dependencies.add(target);attached=true}
    }
    if(!attached)effects.push(id)
  }
  // Unclassified immediate statements stay reachable from every public root.
  for(const exported of exports) {
    const root=owner.get(exported.definition)
    if(root!==undefined)for(const effect of effects)nodes[root].dependencies.add(effect)
  }
  // Condense cycles. This keeps global binding writers with their declarations
  // and preserves original statement order within every initialization cycle.
  let next=0
  const index=new Map(), low=new Map(), stack=[], active=new Set(), components=[]
  function visit(id) {
    index.set(id,next);low.set(id,next++);stack.push(id);active.add(id)
    for(const dependency of nodes[id].dependencies) {
      if(!index.has(dependency)){visit(dependency);low.set(id,Math.min(low.get(id),low.get(dependency)))}
      else if(active.has(dependency))low.set(id,Math.min(low.get(id),index.get(dependency)))
    }
    if(low.get(id)===index.get(id)) {
      const component=[];let member
      do{member=stack.pop();active.delete(member);component.push(member)}while(member!==id)
      components.push(component.sort((a,b)=>a-b))
    }
  }
  for(let id=0;id<nodes.length;id++)if(!index.has(id))visit(id)
  components.sort((a,b)=>a[0]-b[0])
  const componentOf=new Map()
  components.forEach((members,id)=>members.forEach(member=>componentOf.set(member,id)))
  const path=id=>`${components[id].some(member => effects.includes(member)) ? 'effect' : 'part'}-${id}.mjs`
  const importedPath=value=>value.startsWith('.') ? './'+relative(directory,join(dirname(file),value)).replaceAll('\\','/') : value
  await mkdir(directory,{recursive:true})
  await writeFile(join(directory, 'package.json'), JSON.stringify({sideEffects:['./effect-*.mjs']}))
  for(let id=0;id<components.length;id++) {
    const imports=new Map(), bindings=new Set(), declarations=[]
    const addImport=(from,name)=>{if(!imports.has(from))imports.set(from,new Set());imports.get(from).add(name)}
    for(const member of components[id]) {
      const item=nodes[member]
      for(const definition of item.declarations)declarations.push(definition.name)
      for(const definition of item.reads) {
        if(foreign.has(definition)) {
          const external=foreign.get(definition)
          addImport(importedPath(external.path),external.imported===external.name ? external.name : `${external.imported} as ${external.name}`)
        } else if(owner.has(definition)) {
          const from=componentOf.get(owner.get(definition))
          if(from!==id)addImport('./'+path(from),definition.name)
        }
      }
      for(const dependency of item.dependencies) {
        const from=componentOf.get(dependency)
        if(from!==id)bindings.add('./'+path(from))
      }
    }
    const lines=[...imports].sort(([a],[b])=>a.localeCompare(b)).map(([from,names])=>`import {${[...names].sort().join(',')}} from ${JSON.stringify(from)};`)
    // SCC imports already initialize all dependencies. Normally every edge has
    // a binding; retain an explicit dependency for any statement-only edge.
    for(const from of [...bindings].sort())if(!imports.has(from))lines.push(`import ${JSON.stringify(from)};`)
    for(const member of components[id])lines.push(nodes[member].code)
    if(declarations.length)lines.push(`export {${declarations.join(',')}};`)
    await writeFile(join(directory,path(id)),lines.join('\n')+'\n')
  }
  const lines=[]
  for(const exported of exports) {
    const external=foreign.get(exported.definition)
    const from=external ? importedPath(external.path) : './'+path(componentOf.get(owner.get(exported.definition)))
    const local=external ? external.imported : exported.definition?.name
    if(!local || from.includes('undefined'))throw new Error(`Unresolved graph export ${exported.name}`)
    lines.push(`export {${local}${local===exported.name?'':' as '+exported.name}} from ${JSON.stringify(from)};`)
  }
  const entry=join(directory,'index.mjs')
  await writeFile(entry,lines.join('\n')+'\n')
  return {entry,components:components.length,statements:nodes.length,effects:effects.length}
}
