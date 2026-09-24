/**
 * Identity at the JavaScript boundary: re-types a value the value-type
 * helpers already know the shape of (a ValueType object, a colour model, a
 * number). The compiler erases the call.
 */
export function cast(value: any): any {
  return value
}
