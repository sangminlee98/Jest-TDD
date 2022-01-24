class Node {
  item;
  preNode;
}
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
const stack = new Stack();
stack.push(1);
console.log(stack.head.item);
export {Stack, Node};