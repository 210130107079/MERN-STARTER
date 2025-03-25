const http = require('http');

const server = http.createServer((req,res)=>{
    console.log("Request made !");

    res.setHeader('Content-Type','text/html');
    res.write('<p><b>Hello World !</b></p>');
    res.write('<p>How are You ?</p>');
    res.end();
})

server.listen('3000','localhost',()=>{
    console.log("Listening to the request !");
});