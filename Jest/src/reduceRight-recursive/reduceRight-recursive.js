// checking reduce right with recursiveness
import reverse from './../reverse/reverse';

const reduce = (arr, func, acc) => {
  let newAcc = acc ? acc : 0;
  return (function internalReduce(internalArr, counter) {
    if (internalArr.length === 0) {
      return newAcc;
    } else {
      const [head, ...tails] = internalArr;
      newAcc = func(newAcc, counter, head);

      return internalReduce(tails, counter - 1);
    }
  })(reverse(arr), arr.length - 1);
};

export default reduce;
