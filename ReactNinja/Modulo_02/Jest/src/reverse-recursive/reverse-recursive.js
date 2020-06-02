const reverse = (arr) => {
  let count = arr.length - 1;
  return (function internalReverse(arr, count) {
    return count === -1
      ? []
      : [arr[count]].concat(internalReverse(arr, count - 1));
  })(arr, count);
};

export default reverse;
