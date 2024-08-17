const arr = [1,2,3,4,5,6,7,8,9,0];
/**
 * 
 */
let oddArr = arr.filter((element)=>{
    return element % 2 != 0;
})
console.log(oddArr); // returns new array;
console.log(arr);