class Stack {
  constructor() {
    this.size = 0;
    this.head = null;
  }
  push(item) {
    const node = { item, preNode: this.head};
    this.size++;
  }
}
module.exports = Stack;