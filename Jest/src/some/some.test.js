import { expect } from "chai";
import some from ".//some";

it("some should be a function", () => {
  expect(some).to.be.a("function");
});

it('some should return true some([10],(item,index,array)=> item === 10))',()=>{
    expect(some([10],item=> item === 10)).to.be.ok
})

it('some should return true some([1,2,3], (item,index,arr)=> index > 0 ',()=>{
    expect(some([10],(item,index,arr)=>index>-1)).to.be.ok
})

it('some should return true some([1,2,3], (item,index,arr)=> arr.length > 2 ',()=>{
    expect(some([10,1,3],(item,index,arr)=>arr.length>2)).to.be.ok
})

