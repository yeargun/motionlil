// Host builtins the animation modules call; each forwards to one builtin, so
// the compiler prints the builtin itself at every call site.
export function animAssign2(target: any, source: any): any {
  return Object.assign(target, source)
}
export function animAssign3(target: any, a: any, b: any): any {
  return Object.assign(target, a, b)
}
export function animDefineProperties(target: any, props: any): any {
  return Object.defineProperties(target, props)
}
export function animSinh(x: number): number {
  return Math.sinh(x)
}
export function animCosh(x: number): number {
  return Math.cosh(x)
}
export function animNewPromise(executor: any): any {
  return new Promise(executor)
}
export function animPromiseAll(values: any): any {
  return Promise.all(values)
}
export function animArrayFrom(values: any): any {
  return Array.from(values)
}

// Upstream's public animation classes. LilScript builds every instance and
// gives it the class prototype (`animAdopt`, or `animCreate` for an object
// built field by field), so methods and accessors are shared as upstream's
// class members are. This constructor makes `new` and `instanceof` work on
// that prototype; its `length` is upstream's (one declared parameter).
export function animClass(construct: any, prototype: any, surface: any): any {
  for (const key in surface) {
    const descriptor = surface[key]
    descriptor.configurable = true
    if ("value" in descriptor) descriptor.writable = true
  }
  function Class(a: any) {
    return construct(a, arguments[1])
  }
  Class.prototype = Object.defineProperties(prototype, surface)
  Object.defineProperty(prototype, "constructor", { value: Class, writable: true, configurable: true })
  return Class
}
export function animAdopt(value: any, prototype: any): void {
  Object.setPrototypeOf(value, prototype)
}
export function animCreate(prototype: any): any {
  return Object.create(prototype)
}
// A method whose declared parameters are fewer than it reads, as upstream's
// defaulted parameters are (`jump(v, endAnimation = true)` has length 1).
export function animArity(method: any, length: number): any {
  return Object.defineProperty(method, "length", { value: length })
}
