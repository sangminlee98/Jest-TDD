const Stack = require('../stack.js');

describe('stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });
  it('is created empty', () => {
    expect(stack.size).toBe(0);
  })
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
    expect(stack.head.preNode.data).toBe(1);
  })
  describe('pop test', () => {
    it('when stack size is 0, pop return error', () => {
      expect(() => stack.pop()).toThrow('error');
    })
    it('pop test', () => {
      stack.push(1);
      expect(stack.pop()).toBe(1);
      expect(stack.size).toBe(0);
    });
    it('multi pop test', () => {
      stack.push('가');
      stack.push('나');
      stack.push('다');
      expect(stack.size).toBe(3);
      expect(stack.pop()).toMatch('다');
      expect(stack.size).toBe(2);
      expect(stack.pop()).toMatch('나');
      expect(stack.size).toBe(1);
      expect(stack.pop()).toMatch('가');
      expect(stack.size).toBe(0);
      expect(() => stack.pop()).toThrow('error');
    })
  })
})