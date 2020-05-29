// Checking function map with iteration

const map = (arr,func) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(func(arr[i], i, arr));
  }

  return newArray;
};

export default map;


