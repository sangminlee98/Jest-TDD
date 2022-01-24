const Stack = require('../stack.js');

describe('stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });
  it('push test', () => {
    stack.push(1);
    expect(stack.head.data).toEqual(1);
    expect(stack.size).toBe(1);
  })
  
})