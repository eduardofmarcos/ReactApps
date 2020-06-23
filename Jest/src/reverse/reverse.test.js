import { expect } from "chai";
import reverse from "./reverse";

it("reverse shoud be a function", () => {
  expect(reverse).to.be.a("function");
});

it("reverse([1], (item) => item)) should return a [1] ", () => {
  expect(reverse([1])).to.be.deep.equal([1]);
});

it("reverse(([1, 2, 3], (item) => item > 2) should return [3,2,1]", () => {
  expect(
    reverse([1, 2, 3,4,5,6,7])
  ).to.be.deep.equal([7,6,5,4,3,2,1]);
});

