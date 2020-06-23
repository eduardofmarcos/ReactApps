import { expect } from 'chai';
import every from './every';

it('every shoud be a function', () => {
  expect(every).to.be.a('function');
});

it('every should return true every([1], (item) => item === 1))', () => {
  expect(every([1], (item) => item === 1)).to.be.deep.ok;
});

it('every should return true every([10,20], (item) => item >= 0)) ', () => {
  expect(every([10,20], (item) => item >= 0)).to.be.ok;
});

it('every should return true every([1,2,3,4,5,6,7,8],(item,index)=>index>-1))', () => {
  expect(every([1,2,3,4,5,6,7,8],(item,index)=>index>-1)).to.be.ok;
});

it('every should return true every([3,4],(item,index,arr)=>arr===arr)) ', () => {
  expect(every([3,4],(item,index,arr)=>arr===arr)).to.be.deep.ok;
});
