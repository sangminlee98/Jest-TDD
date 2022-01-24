const Stack = require('../stack.js');

describe('stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });
  it('1 push test', () => {
    stack.push(1);
    expect(stack.head.data).toBe(1);
    expect(stack.size).toBe(1);
  })
  it('multi push test', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.head.data).toBe(2);
    expect(stack.size).toBe(2);
  })
})