//usin res.send File is much more exhausting

// const express = require('express')
// //Invoking app using Express
// const app = express()
// //Listening for request
// app.listen(3000)
// //Listening to the requests done by the user
// app.get('/',(req,res)=>{
//     res.sendFile('./html/login.html',{root: __dirname})
// })
// app.get('/main',(req,res)=>{
//     res.sendFile('./html/main.html',{root: __dirname})
// })
// app.get('/contact',(req,res)=>{
//     res.sendFile('./html/contact.html',{root: __dirname})
// })
// app.get('/about',(req,res)=>{
//     res.sendFile('./html/about.html',{root: __dirname})
// })
// app.get('/desc',(req,res)=>{
//     res.sendFile('./html/desc.html',{root: __dirname})
// })

//Instead of susing res.sen File we can use res.render() funstion which is much more easy to render html page.

const express = require('express');

const app = express()

app.set('view engine','ejs');

app.listen(3000)
app.use((req,res)=>{
    console.log("new Request is made !");
    console.log('Host :',req.hostname);
    console.log('Path :',req.path);
    console.log('Method :',req.method);
    req.next()
});

app.get('/login',(req,res)=>{
    res.render('login',{title:'Login'});
})

app.get('/main',(req,res)=>{
    res.render('main',{title:'Main page'})
})

app.get('/about',(req,res)=>{
    res.render('about',{title:'About Us'})
})

app.get('/contact',(req,res)=>{
    res.render('contact',{title:'Contact Us'})
})

app.get('/desc',(req,res)=>{
    res.render('desc',{title:'Description'})
})