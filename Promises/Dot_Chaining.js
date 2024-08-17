function createPromises(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(10);
        },10000);
    })
}
createPromises()
.then((value)=>{
    console.log("value of 1st ",value);
    return value*2;
})
.then((value)=>{
    console.log("value of 2nd ",value);
    return value*2;
})
.then((value)=>{
    console.log("value of 2nd ",value);
    return value*2;
})