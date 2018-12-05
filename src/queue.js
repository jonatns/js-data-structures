module.exports = () => {
  const array = [];

  return {
    enqueue(item) {
      array.unshift(item);
    },
    dequeue() {
      return array.pop();
    },
    peek() {
      return array[array.length - 1];
    }
  };
}
