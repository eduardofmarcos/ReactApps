import { expect } from "chai";
import mapRecursive from "./map-recursive";

it("map should be a function", () => {
  expect(mapRecursive).to.be.a("function");
});

it("mapRecursive([2,4], (item)=>item+1) should return an array [3,5]", () => {
  expect(mapRecursive([2, 4], (item) => item + 1)).to.be.deep.equal([3, 5]);
});

it("mapRecursive([1,2], (item, index)=>index) should return an array [0,1]", () => {
  expect(mapRecursive([1, 2], (item, index, arr) => index)).to.be.deep.equal([
    0,
    1,
  ]);
});

it("mapRecursive([2,4], (item, index, array)=>array) should return an array [[2,4] [2,4]]", () => {
  expect(mapRecursive([2, 4], (item, index, arr) => arr)).to.be.deep.equal([
    [2, 4],
    [2, 4],
  ]);
});


