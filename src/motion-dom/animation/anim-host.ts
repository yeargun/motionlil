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
