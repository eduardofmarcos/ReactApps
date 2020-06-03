import { expect } from "chai";
import find from "./find-recursive";

it("find shoud be a function", () => {
  expect(find).to.be.a("function");
});

it("find([1], (item) => item)) should return a 1 ", () => {
  expect(find([1], (item) => item)).to.be.deep.equal(1);
});

it("find([1,2,3], (item) => item>1)) should return a 3 ", () => {
    expect(find([1,2,3], (item) => item===3)).to.be.deep.equal(3);
  });
  
  it("find([1,2,3], (item) => item===4)) should return undefined ", () => {
    expect(find([1,2,3], (item) => item===4)).to.be.deep.equal(undefined);
  });