const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method);

    res.setHeader('Content-Type','text/html');

    let path = './html/';

    switch(req.url) 
    {
        case '/':
            path +='login.html';
            break;
         
        case '/about':
            path +='about.html';
            break;    
    }

    fs.readFile(path,(err,data)=>{
        if(err)
            {
            console.log(err);    
            res.end();
        }
        else{
            // res.write(data);
            // res.end();
            res.end(data);

            //Both works similarly.
        }
    });
});

server.listen(3000,'localhost',()=>{
    console.log("Listening to port number 3000")  
});