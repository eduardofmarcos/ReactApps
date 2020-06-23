import { expect } from "chai";
import map from "./map";

it("map should be a function", () => {
  expect(map).to.be.a("function");
});


it("map([2,4], (item)=>item+1) should return an array [3,5]", () => {
  expect(map([2, 4], (item) => item + 1)).to.be.deep.equal([3, 5]);
});

it("map([2, 4, 4, 5, 5], (item, index,arr)=>index) should return an array [0,1,2,3,4]", () => {
  expect(map([2, 4, 4, 5, 5], (item, index, arr) => index)).to.be.deep.equal([
    0,
    1,
    2,
    3,
    4,
  ]);
});

it("map([2,4], (item, index)=>arr) should return an array [[2,4] [2,4]]", () => {
  expect(map([2, 4], (item, index, arr) => arr)).to.be.deep.equal([
    [2, 4],
    [2, 4],
  ]);
});



