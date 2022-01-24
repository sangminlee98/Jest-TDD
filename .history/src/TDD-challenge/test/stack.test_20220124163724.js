const Stack = require('../stack.js');

describe('Stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it('스택이 선언되면 초기 사이즈는 0이다.', () => {
    expect(stack.size).toBe(0);
  });
})