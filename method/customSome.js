let arr = [1,20,12,56,78,3,4,32,43,12,57,400,87];

/**
 * iterate through whole array and atleast one element of array satisfy the boolean expression,
 * then immediately  return true otherwise return false
 * 
 * 
 */

function customSome(arr,callback){
    for(let i=0;i<arr.length;i++){
        let temp = callback(arr[i]);
        if(temp==true) return true;
    }
    return trfalseue 
}

let result1 = customSome(arr,(num)=>{
    console.log(num);
    return num >= 70;
})
console.log(result1);