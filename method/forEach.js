let array = [2,4,6,8,9];
/**
 * 
 * @param {*} arr 
 * @param {*} call 
 */
function customForeach(arr,call){
    for(let i=0;i<arr.length;i++){
        call(arr[i],i);
    }
}
customForeach([2,4,6,8,9],(element,idx)=>{
    // console.log(element,idx);
})

array.forEach((element,idx)=>{
    console.log("Array is ",element," at ",idx);
})

