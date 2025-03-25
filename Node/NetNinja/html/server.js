const http = require('http')
const fs = require('fs')

const server = http.createServer((request,respone)=>{
    respone.setHeader('Content-Type','text/html')
    let path = '';

    switch(request.url)
    {
        case '/':
            path += 'login.html';
            break;
        
        case '/main':
                path += 'main.html';
                break;

        case '/about':
            path += 'about.html';
            break;

        case '/contact':
            path += 'contact.html';
            break;

        case '/desc':
            path += 'desc.html';
            break;    
    }

    fs.readFile(path,(err,data)=>{
        if(err)
        {
            console.log(err);
            respone.end()
        }
        else
        {
            respone.end(data)
        }
    })
})

server.listen(3000,'localhost',()=>{
    console.log("Listening to Port Number 3000...");
})