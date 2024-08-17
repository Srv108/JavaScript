function DownloadData(url){
    console.log("Your Data is downloading from",url);
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            let value = "Content";
            rej(value);
        },10000);
    })
}

function WriteFile(Data){
    console.log("Written Started ",Data);
}

function UploadFile(filename,newurl){
    console.log("File uploading to ",newurl);
}

const response1 = DownloadData("www.google.com");
response1.then(function accepted(value){
    console.log("Data Downloaded Sucessfully");
    WriteFile(value);
},function rejected(value){
    console.log("Retry, File not download");
})
.then(function accepted1(value){
    setTimeout(()=>{
        console.log("Data written sucessfully");
        let str = "www.facebook.com";
        UploadFile(value,str);
    },3000);
},function rejected1(){
    console.log("File not uploaded,Try again : ");
})
.then(function accept(){
    setTimeout(()=>{
        console.log("File uploaded sucessfully");
    },8000);
},function rejact(){
    console.log("Error in uploading, Try again");
})
console.log(response1);