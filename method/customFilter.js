let array = [2,4,6,8,9];
/**
 * 
 * @param {*} arr 
 * @param {*} call 
 */
function customForeach(arr,call){
    let temp = [];
    for(let i=0;i<arr.length;i++){
        // let x = call(arr[i]);
        if(call(arr[i])) temp.push(arr[i]);
    }
    return temp;
}
let result = customForeach([1,2,3,4,5,6,7,8,9,0],(element)=>{
    return element % 2 != 0;
})

console.log(result);


