/**
 * An attribute is written as a property only where the element (or its
 * prototype) defines a setter for it.
 */
export function canSetAsProperty(element: any, name: string): boolean {
  if (!(name in element)) return false
  const descriptor =
    Object.getOwnPropertyDescriptor(Object.getPrototypeOf(element), name) ||
    Object.getOwnPropertyDescriptor(element, name)
  return !!descriptor && typeof descriptor.set === "function"
}
