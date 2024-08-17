let array = [2,4,6,8,9];
/**
 * 
 * @param {*} arr 
 * @param {*} call 
 */
function customMap(arr,call){
    let temp = [];
    for(let i=0;i<arr.length;i++){
        temp.push(arr[i]);
        call(arr[i],i);
    }
    return temp;
}
let result = customMap([2,4,6,8,9],(element)=>{
    console.log(element*element);
})
console.log(result);

