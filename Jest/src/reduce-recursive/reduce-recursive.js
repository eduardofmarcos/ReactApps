// checking the reduce function using recursiveness

// //reduce(
//     [1, 2],
//     (acc, index, item) => {
//       acc['index' + index] = item;
//       return acc;
//     },
//     {}
//   )

const reduce = (arr, func, acc) => {
  let newAcc = acc ? acc : 0;
  return (function internalReduce(internalArr, counter) {
    if (internalArr.length === 0) {
      return newAcc;
    } else {
      const [head, ...tails] = internalArr;
      newAcc = func(newAcc, counter, head);
      return internalReduce(tails, counter + 1);
    }
  })(arr, 0);
};

export default reduce;


//const reduce = (arr, func, acc) => {
    //   let newAcc = acc ? acc : 0;
    //   return (function internalReduce(internalAcc, internalArr, counter) {
    //     const [head, ...tails] = internalArr;
    //     const nextAcc = () => func(internalAcc, counter, head);
    
    //     return internalArr.length === 0
    //       ? internalAcc
    //       : internalReduce(nextAcc(), tails, counter + 1);
    //   })(acc, arr, 0);
    // };
