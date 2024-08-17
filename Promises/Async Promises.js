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




