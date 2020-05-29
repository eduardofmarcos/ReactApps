import { expect } from 'chai';
import filter from './filter-recursive';

it('filter shoud be a function', () => {
  expect(filter).to.be.a('function');
});

it('(filter [1], (item)=>item) should return a item ', () => {
  expect(filter([1], (item) => item)).to.be.deep.equal([1]);
});

it('filter(([1, 2, 3, 4, 5], (item) => item > 1) should return [2,3, 4, 5]', () => {
  expect(filter([1, 2, 3, 4, 5], (item) => item > 1)).to.be.deep.equal([
    2,
    3,
    4,
    5,
  ]);
});

it('filter((4], (item, index) => item === index + 4) should return [4]', () => {
  expect(filter([4], (item, index) => item === index + 4)).to.be.deep.equal([
    4,
  ]);
});

it("filter(([1, 2, 3, 2,1], (item,index, array) => array) should return [1,2,3,2,1]", () => {
  const before = filter([1, 2, 3, 2, 1], (item, index, array) => array);

  expect(before).to.be.deep.equal([1, 2, 3, 2, 1]);
});
