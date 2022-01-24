const Stack = require('../stack.js');

describe('stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });
  it('push test', () => {
    stack.push(0);
    expect(stack.head.data).toEqual(0);
  })
  
})