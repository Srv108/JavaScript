let arr = [1,20,12,56,78,3,4,32,43,12,57,400,87];

/**
 * iterate through whole array and if element of array satisfy the boolean expression,
 * then return true otherwise return false
 * 
 * 
 * if any element in array not satisfy the boolean expression then immediately return false
 */

function customEvery(arr,callback){
    for(let i=0;i<arr.length;i++){
        // let temp = callback(arr[i]);
        if(callback(arr[i])==false) return false;
    }
    return true 
}

let result1 = customEvery(arr,(num)=>{
    console.log(num);
    return num <= 64;
})
console.log(result1);