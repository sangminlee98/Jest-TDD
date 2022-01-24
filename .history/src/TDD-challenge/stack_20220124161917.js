class Stack {
  head;
  size=0;
  get size() {
    return this.size;
  };
  push(value) {
    const node = {data: value, preNode: this.head};
    this.head = node;
    this.size++;
  }
  pop() {
    if(this.size === 0) {
      throw new Error('error');
    };
    const value = this.head.data;
    this.head = this.head.preNode;
    this.size--;
    return value;
  }
}
module.exports = Stack;

