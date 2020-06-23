// checking function some with recursiveness

const some = (arr,func)=>{
   return(function someInternal(internalArr, counter) {
    const [head,...tail] = internalArr
    return arr.length===0 ? false : func(head, counter, internalArr) ? true : someInternal(tail, counter+1) 
   })(arr,0)
    

}

export default some