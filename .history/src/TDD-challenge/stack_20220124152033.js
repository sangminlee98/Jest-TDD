class Node {
  item;
  preNode;
  constructor(item) {
    this.item = item;
  }
}
class Stack {
  head;
  constructor() {
    const node = new Node();
    this.head = node.item;
  }
  push(item) {
    const node = new Node(item);
    node.preNode = this.head;
    this.head = node.item;
  }
}