let arr = [100,200,122,56,78,3,4,32,43,12,57,400,87];

// const check = num => num < 400;
// console.log(arr.every(num => num < 100));

// *********************************  //

let result = arr.some((element)=>{
    console.log(element);
    return element < 100;
})
console.log(result);