const fs = require('fs');

const readStream = fs.createReadStream('./docs/doc2.txt','utf-8')
const writeStream = fs.createWriteStream('./docs/doc3.txt','utf-8')

readStream.on('data',(chunk)=>{
    console.log("New Chunk of Stream !");
    console.log("");
    console.log(chunk);

    writeStream.write(chunk)
})