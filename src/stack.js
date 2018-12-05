module.exports = () => {
  const array = [];

  return {
    push(item) {
      array.push(item);
    },
    pop() {
      return array.pop();
    },
    peek() {
      return array[array.length - 1];
    },
    length() {
      return array.length;
    },
    isEmpty() {
      return array.length === 0;
    }
  }
}
