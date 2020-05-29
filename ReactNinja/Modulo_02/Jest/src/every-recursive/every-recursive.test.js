// Checking every function with recursiveness

import { expect } from 'chai';
import everyRecursive from './every-recursive';

it('everyRecursive shoud be a function', () => {
  expect(everyRecursive).to.be.a('function');
});

it('every should return true everyRecursive([1], (item) => item === 1))', () => {
  expect(everyRecursive([1], (item) => item === 1)).to.be.deep.ok;
});

it('every should return true everyRecursive([10,20], (item) => item >=0 ))', () => {
  expect(everyRecursive([10,20], (item) => item >=0 )).to.be.ok;
});

it('every should return true everyRecursive([3,4],(item,index,arr)=>arr===arr))', () => {
  expect(everyRecursive([3,4],(item,index,arr)=>arr===arr)).to.be.deep.ok;
});
