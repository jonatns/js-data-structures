const createStack = require('../src/stack');

describe('Stack', () => {
  let stack;
  beforeEach(() => {
    stack = createStack();
  });

  test('push', () => {
    stack.push('a');
    expect(stack.isEmpty()).not.toBeTruthy();
  });

  test('pop', () => {
    stack.push('a');
    expect(stack.pop()).toEqual('a');
    expect(stack.length()).toEqual(0);
  });

  test('peek', () => {
    stack.push('a');
    expect(stack.peek()).toEqual('a');
  });

  test('length', () => {
    expect(stack.length()).toEqual(0);
  });

  test('isEmpty', () => {
    expect(stack.isEmpty()).toBeTruthy();
  });
});
