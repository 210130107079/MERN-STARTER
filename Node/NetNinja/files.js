//Importing in-built fs module for the following purpose
//FS=File System
const fs = require('fs');


//Reading Files
fs.readFile('./docs/doc1.txt', (err,data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});


//Writing Files
fs.writeFile('./docs/doc1.txt',"How are You ?",()=>{
    console.log("File has been Written");
});


//Creating Directory
if(!fs.existsSync('./me')){
    fs.mkdir('./me',(err)=>{
        if(err){
            console.log(err);
        }
        console.log("Folder Createdd !");
    });
}
else{
    console.log("Folder already exist !");
}


//Deleting Directory
fs.rmdir('./me',(err)=>{
    if(err){
        console.log(err);
    }
    console.log("Folder Deleted !");
});