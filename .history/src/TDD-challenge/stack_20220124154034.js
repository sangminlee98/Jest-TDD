const Node = require('./node.js')
class Stack {
  head;
  constructor() {
    this.head = null;
  }
  push(item) {
    const node = new Node();
    node.item = item;
    node.preNode = this.head;
    this.head = node
  }
}
module.exports = Stack;

