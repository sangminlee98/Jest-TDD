const Node = require('./node.js')
class Stack {
  head;
  item;
  constructor() {
    this.head = undefined;
    this.item = this.head.item;
  }
  push(item) {
    const node = new Node();
    node.item = item;
    node.preNode = this.head;
    this.head = node
  }
}
module.exports = Stack;

