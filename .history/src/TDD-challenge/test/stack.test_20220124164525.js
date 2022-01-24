const Stack = require('../stack.js');

describe('Stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it('is created empty', () => {
    expect(stack.size).toBe(0);
  });
  it('allows to push item', () => {
    stack.push('가');
    expect(stack.size).toBe(1);
  });
  
  describe('pop', () => {
    it('throws an error if stack is empty', () => {
      expect(()=> stack.pop()).toThrow('stack is empty');
    });
    it('returns the last pushed item and removes it from the stack', () => {
      stack.push('가');
      stack.push('나');
      expect(stack.pop()).toMatch('나');
      expect(stack.size).toBe(1);
    })
  });
  
  describe('peek', () => {
    it('throws an error if stack is empty', () => {
      expect(()=> stack.peek()).toThrow('stack is empty');
    });
  })
  
})