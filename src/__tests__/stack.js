const createStack = require('../stack');

describe('Stack', () => {
  let stack;
  beforeEach(() => {
    stack = createStack();
  });

  describe('push', () => {
    test('should throw error if no item is provided', () => {
      expect(() => {
        stack.push();
      }).toThrow('item not provided');
    });

    test('should add the item to the top of the stack successfully', () => {
      stack.push('a');
      stack.push('a');
      stack.push('c');
      expect(stack.peek()).toBe('c');
    });
  });

  describe('pop', () => {
    test('should return undefined if stack is empty', () => {
      expect(stack.pop()).toBeUndefined();
    });

    test('should return the item removed from the top of the stack', () => {
      stack.push('a');
      stack.push('b');
      stack.push('c');
      expect(stack.pop()).toBe('c');
    });
  });

  describe('peek', () => {
    test('should return undefined if the stack is empty', () => {
      expect(stack.peek()).toBeUndefined();
    });

    test('should return the item in the top of the stack without removing it', () => {
      stack.push('a');
      stack.push('b');
      stack.push('c');
      expect(stack.peek()).toBe('c');
    });
  });

  describe('length', () => {
    test('should return 0 if stack is empty', () => {
      expect(stack.length()).toBe(0);
    });

    test('should return 1 when 2 items are pushed and 1 is popped', () => {
      stack.push('a');
      stack.push('b');
      stack.pop();
      expect(stack.length()).toBe(1);
    });
  });

  describe('isEmpty', () => {
    test('should return true when stack is empty', () => {
      expect(stack.isEmpty()).toBeTruthy();
    });

    test('should return false when stack is empty', () => {
      stack.push('a');
      expect(stack.isEmpty()).toBeFalsy();
    });
  });
});
