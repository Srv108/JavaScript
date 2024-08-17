// function createPromises(){
//     // SyncPromises
//     return new Promise((res,rej)=>{
//         for(let i=0;i<10000000000;i++){}
//         res(10);
//     })
// }
// const response = createPromises();
// console.log(response);


// Sync promises
function createPromise(){
    return new Promise((res,rej)=>{
        for(let i=0;i<100000000000;i++){}
        let value = Math.random()*10;
        if(value > 5) res(value);
        else rej(value);
    });
}
const response = createPromise();
console.log(response);