const arr = [10, 20, 30, 40];


const func = (acc,index,item) => {
  acc['index' + index] = item;
};

const reduce = (func,acc) => {
  let accType = acc ? acc : arr[0];

  for (let i = 0; i < arr.length; i++) {
    func(accType, i,arr[i])
  }
  return accType;
};

const undef = reduce(func,{});
console.log(undef);
