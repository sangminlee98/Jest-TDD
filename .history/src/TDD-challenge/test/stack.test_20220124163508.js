const Stack = require('../stack.js');

describe('Stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it('스택이 처음 만들어지면 size는 0이어야 한다.', () => {
    expect(stack.size).toBe(0);
  })
})