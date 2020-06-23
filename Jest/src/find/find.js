//checking find function with iteration

const find = (arr, func)=>{
    for(let i=0; i<arr.length; i++){
        if(func(arr[i])){
            return arr[i]
        }
    }

    return undefined
}

export default find