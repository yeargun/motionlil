// A JS constructor may return an unrelated object. This explicit host boundary
// retains that API without weakening LilScript nominal constructor semantics.
export function viewTransitionConstructor(implementation: any): any {
  return class ViewTransitionBuilder {
    constructor(update: any, options: any) { return implementation(update, options) }
  }
}

// JS default derived constructors forward every actual argument and keep
// length zero. These are public host subclasses, not sealed LilScript types.
export function keyframeSubclass(Base: any): any {
  return class DOMKeyframesResolver extends Base {}
}
export function visualSubclasses(Base: any): any {
  const DOMVisualElement = class DOMVisualElement extends Base {}
  return [
    DOMVisualElement,
    class HTMLVisualElement extends DOMVisualElement {},
    class ObjectVisualElement extends Base {
      render() { if (this.current) Object.assign(this.current, this.latestValues) }
    },
    class SVGVisualElement extends DOMVisualElement {},
    class DocumentProjectionNode extends Base {},
    class HTMLProjectionNode extends Base {},
  ]
}
