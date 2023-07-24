const _items = new WeakMap();
export class Stack {
  constructor() {
    _items.set(this, []);
  }
  push(a) {
    _items.get(this).push(a);
  }

  pop() {
    const items = _items.get(this);
    if (items.length <= 0) {
      throw new Error("no items in stack");
    }
    _items.get(this).splice(items.length - 1, 1);
    return items[items.length - 1];
  }

  peek() {
    const r = _items.get(this);
    return r[r.length - 1];
  }
  get count() {
    return _items.get(this).length;
  }
  draw() {
    console.log("HELLOOO");
  }
}
