// Checking function filter with recursiveness

const filter = (arr, func) => {
  let i = 0;

  const internalFilter = (internalArr, internalIndex) => {
    internalIndex = i++;

    if (internalArr.length === 0) return [];
    const [head, ...tail] = internalArr;
    if (func(head, internalIndex, internalArr)) {
      return [head].concat(internalFilter(tail, func));
    } else return internalFilter(tail, func);
  };
  return internalFilter(arr, i);
};

export default filter;
