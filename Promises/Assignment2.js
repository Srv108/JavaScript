function Downloader(url){
    console.log("Your Data is downloading from",url);
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            let DownloadedData = "Dummy Content";
            res(DownloadedData);
        },10000);
    });
}

function WriteFile(DownloadedData){
    console.log("Writing Started ",DownloadedData);
    return new Promise((res,rej)=>{
        setTimeout(() =>{
            console.log("Data written succesfully");
            let filename = "Dummy.txt";
            res(filename);
        },2000);
    });
}

function UploadFile(filename,newurl){
    console.log(filename," uploading to the new url ",newurl);
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Uploaded sucessfully");
            let Response = "sucess";
            res(Response);
        },4000);
    });
}

// Downloader("www.google.com")
// .then((DownloadedData)=>{
//     return writeFile(DownloadedData);
// },()=>{
//     console.log("Downloading Failed,Try Again");
// })
// .then((filename)=>{
//     return uploadFile(filename,"www.safary.com");
// },()=>{
//     console.log("Something error in opening file,Try Again");
// })
// .then((value)=>{
//     console.log("Status is ",value);
// },()=>{
//     console.log("File Uploading Failed,Try Again");
// })

Downloader("www.google.com")
.then((DownloadedData) => {
    return WriteFile(DownloadedData);
})
.catch((error) => {
    console.log("Writing Failed:", error); // Handle rejection of WriteFile promise
})
.then((filename) => {
    if (filename) { // Check if filename is defined
        return UploadFile(filename, "www.safary.com");
    }
})
.then((value) => {
    if (value) { // Check if value is defined
        console.log("Status is ", value);
    }
})
.catch((error) => {
    console.log("File Uploading Failed:", error); // Handle any other errors in the promise chain
});
