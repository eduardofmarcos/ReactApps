import { expect } from 'chai';
import reduce from './reduce-recursive';

it('reduce shoud be a function', () => {
  expect(reduce).to.be.a('function');
});

it('reduce([1,2,3,4]) should return 10', () => {
  //arr.reduce(FUNC(acc,item) => {acc['index'+index] = item; return acc},ACC{})
  expect(
    reduce(
      [1, 2, 3, 4],
      (acc, index, item) => {
        return acc + item;
      },
      0
    )
  ).to.deep.equal(10);
});

it('reduce([1,2]) should return {index0:1,index1:2}', () => {
  //arr.reduce(FUNC(acc,item) => {acc['index'+index] = item; return acc},ACC{})
  expect(
    reduce(
      [1, 2],
      (acc, index, item) => {
        acc['index' + index] = item;
        return acc;
      },
      {}
    )
  ).to.deep.equal({ index0: 1, index1: 2 });
});
// const reduce = (arr, func, acc) => {
//   let newAcc = acc ? acc : 0;
//   return (function internalReduce(internalAcc, internalArr, counter) {
//     const [head, ...tails] = internalArr;
//     const nextAcc = () => func(internalAcc, counter, head);

//     return internalArr.length === 0
//       ? internalAcc
//       : internalReduce(nextAcc(), tails, counter + 1);
//   })(acc, arr, 0);
// };