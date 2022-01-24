class Node {
  item;
  preNode;
}
export class Stack {
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