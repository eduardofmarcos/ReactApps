import { expect } from "chai";
import filter from "./filter";

it("filter shoud be a function", () => {
  expect(filter).to.be.a("function");
});

it("filter([1], (item) => item)) should return a [1] ", () => {
  expect(filter([1], (item) => item)).to.be.deep.equal([1]);
});

it("filter(([1, 2, 3, 4, 5, 6, 7], (item) => item > 2) should return [3, 4, 5, 6, 7]", () => {
  expect(
    filter([1, 2, 3, 4, 5, 6, 7], (item) => {
      if (item > 2) return item;
    })
  ).to.be.deep.equal([3, 4, 5, 6, 7]);
});

it("filter([4], (item, index) => item === index + 4)) should return [4]", () => {
  expect(filter([4], (item, index) => item === index + 4)).to.be.deep.equal([
    4,
  ]);
});

it("filter([4], (item, index) => item === index + 4)) should return [4] ", () => {
  expect(filter([4], (item, index) => item === index + 4)).to.be.deep.equal([
    4,
  ]);
});

it("filter(([1, 2, 3, 2, 1], (item,index, array) => index===array.indexOf(item)) should return [1, 2, 3]", () => {
  const before = filter(
    [1, 2, 3, 2, 1],
    (item, index, array) => index === array.indexOf(item)
  );

  expect(before).to.be.deep.equal([1, 2, 3]);
});
