const express = require('express')

const app = express()
const port = 3000

app.get('/login',(req,res)=>{
    res.sendFile('./html/login.html',{root: __dirname})
    res.status(200)
})

app.get('/home',(req,res)=>{
    res.sendFile('./html/home.html',{root: __dirname})
    res.status(200)
})

app.get('/about',(req,res)=>{
    res.sendFile('./html/about.html',{root: __dirname})
    res.status(200)
})

app.get('/contact',(req,res)=>{
    res.sendFile('./html/contact.html',{root: __dirname})
    res.status(200)
})

app.listen(port, () => 
{
  console.log(`Server is running on port ${port}`)
})