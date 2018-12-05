const createQueue = require('../src/queue');

describe('Queue', () => {
  let queue;
  beforeEach(() => {
    queue = createQueue();
  });

  test('enqueue', () => {
    queue.enqueue('a');
    queue.enqueue('b');
    expect(queue.peek()).toEqual('a');
  });

  test('dequeue', () => {
    queue.enqueue('a');
    queue.enqueue('b');
    expect(queue.dequeue()).toEqual('a');
  });

  test('peek', () => {
    queue.enqueue('a');
    queue.enqueue('b');
    queue.dequeue();
    expect(queue.peek()).toEqual('b');
  });
});
