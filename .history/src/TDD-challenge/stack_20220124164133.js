class Stack {
  constructor() {
    this.size = 0;
    this.head = null;
  }
  push(item) {
    const node = { item, preNode: this.head};
    this.size++;
  }
  pop() {
    if(this.size === 0) {
      throw new Error('stack is empty');
    }
  }
}
module.exports = Stack;