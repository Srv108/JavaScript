let arr = [1,20,122,56,78,3,4,32,43,12,57,400,87];

// const check = num => num < 400;
// console.log(arr.every(num => num < 100));

// *********************************  //

let result1 = arr.every((element)=>{
    console.log(element);
    return element < 100;
})
console.log(result1);

// let arr = [1,20,12,56,78,3,4,32,43,12,57,400,87];

/**
 * iterate through whole array and if element of array satisfy the boolean expression,
 * then return true otherwise return false
 * 
 * 
 * if any element in array not satisfy the boolean expression then immediately return false
 */

let result = arr.every((num)=>{
    console.log(num);
    return num < 70; 
});
console.log(result);