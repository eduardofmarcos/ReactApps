const reverse = (arr)=>{
    let newArr=[]
    for(let i=arr.length-1; i>-1; i--){
        newArr.push(arr[i])
    }
    return newArr
}

export default reverse