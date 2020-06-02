import { expect } from "chai";
import reverse from "./reverse-recursive";

it("reverse shoud be a function", () => {
    expect(reverse).to.be.a("function");
  });
  
  it("reverse([1], (item) => item)) should return a [1] ", () => {
    expect(reverse([1], (item) => item)).to.be.deep.equal([1]);
  });
  
  it("reverse(([1, 2, 3]) should return [3,2,1]", () => {
    expect(
      reverse([1, 2, 3])
    ).to.be.deep.equal([3,2,1]);
  });
  
  