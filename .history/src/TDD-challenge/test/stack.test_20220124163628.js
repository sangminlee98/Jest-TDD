const Stack = require('../stack.js');

describe('Stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it('when initialize stack, stack size must be 0', () => {
    expect(stack.size).toBe(0);
  });
  
})