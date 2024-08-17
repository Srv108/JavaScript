let array = [2,4,6,8,9];
/**
 * 
 * @param {*} arr 
 * @param {*} call 
 */
function customForeach(arr,call){
    let temp = [];
    for(let i=0;i<arr.length;i++){
        let x = call(arr[i]);
        temp.push(x);
    }
    return temp;
}
let result = customForeach([2,4,6,8,9],(element)=>{
    console.log(element);
    return element*2;
})

console.log(result);


