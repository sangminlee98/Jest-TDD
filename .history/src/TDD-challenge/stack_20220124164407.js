class Stack {
  constructor() {
    this.size = 0;
    this.head = null;
  }
  push(item) {
    const node = { item, preNode: this.head};
    this.head = node;
    this.size++;
  }
  pop() {
    if(this.size === 0) {
      throw new Error('stack is empty');
    };
    const node = this.head;
    this.head = node.preNode;
    this.size--;
    return node.item;
  }
}
module.exports = Stack;