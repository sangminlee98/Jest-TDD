class Stack {
  head;
  size;
  get size() {
    return this.size;
  };
  push(value) {
    const node = {data: value, preNode: this.head};
    this.head = node;
    this.size++;
  }
}
module.exports = Stack;

