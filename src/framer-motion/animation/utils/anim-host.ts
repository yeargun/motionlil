// Object copies and typed views for the framer-motion animation layer.
// `view` re-types a host value without converting it.
export function copy(a: any): any {
  return Object.assign({}, a)
}

export function spread(a: any, b: any): any {
  return Object.assign({}, a, b)
}

export function spread3(a: any, b: any, c: any): any {
  return Object.assign({}, a, b, c)
}

export function view(value: any): any {
  return value
}

export function sortBy(list: any[], compare: any): void {
  list.sort(compare)
}

export function forEachEntry(map: Map<any, any>, callback: any): void {
  map.forEach(callback)
}
