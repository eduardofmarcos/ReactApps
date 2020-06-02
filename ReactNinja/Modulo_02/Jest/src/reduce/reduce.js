// checking the function reduce with iteration

const reduce = (arr,func, acc) => {
  let accType = acc ? acc : 0;

  for (let i = 0; i < arr.length; i++) {
    accType = func(accType, i, arr[i]);
  }
  return accType;
};

export default reduce;
