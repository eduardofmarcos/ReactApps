// Checking a every function with iteration

const every = (arr, func) => {
  const checkTrue = [];
  for (let index = 0; index < arr.length; index++) {
    if (func(arr[index],index,arr)) {
      checkTrue.push(1);
    }
  }
  return checkTrue.length===arr.length ? true : false
};
export default every;
