function createPromises(){
    // AsyncPromises
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            let value = (Math.random())*10;
            if(value < 5) res(value);
            else rej(value);
        },10000);
    })
}
const response = createPromises();
console.log(response);

response.then(function fullfilledHandler(value){
    console.log("promises fullfilled with ",value);
},function rejectedHandler(value){
    console.log("promises rejected with ",value);
})


for(let i=0;i<100000000000;i++){}
console.log(response);

