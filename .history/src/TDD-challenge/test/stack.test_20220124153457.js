import Stack from '../stack.js';

describe('stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });
  it('push test', () => {
    stack.push(1);
    expect(stack.head.item).toEqual(1);
  })
})