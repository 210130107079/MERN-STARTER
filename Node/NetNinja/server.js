const http = require('http');

//Creating server and stored it in constant named server
const server = http.createServer((req, res)=>{
    // console.log("Request is made !");
    console.log(req.url,req.method);

    //set header content type
    res.setHeader('Content-Type','text/plain');
    res.write("Hello World !");
    res.end();
});

server.listen(3000,'localhost',()=>{
    console.log("Listening to the request on port number 3000 !");
});
//Default value of argument number 2 is localhost , but here it is shown explicitly.