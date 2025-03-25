const express = require('express')

const app = express()
const port = 3000

//Routes Normal
app.get('/', (req, res) => {
    res.send('Welcome to the / Page')
})
app.get('/about', (req, res) => {
    res.send('Welcome to the /about Page')
})
app.get('/contact', (req, res) => {
    res.send('Welcome to the /contact Page')
})

//Routes based on String Parameters
app.get('/ab?cd', (req, res) => {
    res.send('Welcome to the /ab?cd Page')
    // ab?cd is evaluated as a b?cd
    // It takes 0 or 1 before the ? which means acd or abcd is accepted
})

app.get('/ab+cd', (req, res) => {
    res.send('Welcome to the /ab+cd Page')
    // abcd
    // abbcd
    // abbbcd
    // abbbbcd
    // abbbbbcd
    // abbbbb...bcd (any number of bs, at least one)
    
})

app.get('/ab*cd', (req, res) => {
    res.send('Welcome to the /ab*cd Page')
    // * can be replaced by any string Number or anythig
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))