const Node = require('./node.js')
class Stack {
  head;
  item;
  constructor() {
    this.head = null;
  }
  get item() {
    if(this.head == null) {
      return 'stack is null';
    }
    this.item = this.head.item;
    return this.item;
  }
  push(item) {
    const node = new Node();
    node.item = item;
    node.preNode = this.head;
    this.head = node
  }
}
module.exports = Stack;

