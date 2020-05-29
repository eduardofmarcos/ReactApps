// Checking a every function recursiveness
// Not checking index

const everyRecursive = (arr, func) => {
    if(arr.length===0) return []
    const [head,...tail] = arr
    if(!func(head)){
        return false
    }
    everyRecursive(tail,func)
    return true
}
  export default everyRecursive;
  