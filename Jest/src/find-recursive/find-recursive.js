// checking find function using recursiveness

const find = (arr, func) => {
  return (function internalFind(internalArr) {
    const [head, ...tail] = internalArr;
    return internalArr.length === 0
      ? undefined
      : func(head)
      ? head
      : internalFind(tail);
  })(arr);
};

export default find;
