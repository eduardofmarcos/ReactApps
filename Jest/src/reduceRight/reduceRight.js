// checking reduce right with iteration

const reduceRight = (arr, func, acc) => {
  let accType = acc ? acc : 0;

  for (let i = arr.length - 1; i > -1; i--) {
    accType = func(accType, i, arr[i]);
  }

  return accType;
};

export default reduceRight;
