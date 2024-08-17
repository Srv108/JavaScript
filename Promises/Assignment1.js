function downloader(url, cb) {
    console.log("Downloading Data from ",url);
    // write a dummy impl using setTimeout to show a delay 
    setTimeout(() =>{
        console.log("Download compleated");
        let downloadedData = "Content";
        cb(downloadedData);
    },4000);
}

function writeFile(data,cb){
    console.log("Now you can write ",data);
    setTimeout(() =>{
        console.log("Data written succesfully");
        let filename = "text.txt";
        cb(filename);
    },3000);
}

function uploadFile(filename,newurl,cb){
    console.log("uploading file to the new url : ",newurl);
    setTimeout(()=>{
        console.log("Uploaded sucessfully");
        let resource = "sucess";
        cb(resource);
    },2000);
}

console.log("Downloading Started");
downloader("www.google.com",(data)=>{
    // console.log("downloaded data is ",data);
    writeFile(data,(file)=>{
        uploadFile(file,"www.facebook.com",(resource)=>{
            console.log("Status of file",resource);
        });
    });
});