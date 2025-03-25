const express = require('express')
const { connectToDb , getDb } = require('./db')
const {ObjectId} = require('mongodb')

const app = express()
app.use(express.json())

let db
connectToDb((err)=>{
    if(!err){
        app.listen(3000, () => {
            console.log(`Example app listening on port 3000!`)
        })
        db = getDb()
    }
})

app.get('/books', (req, res) => {

    const page = req.query.page || 0
    const booksperPage = 2

    let books = []

    db.collection('books')
        .find()
        .sort({ author : 1 })
        .skip(page * booksperPage)
        .limit(booksperPage)
        .forEach(book => books.push(book))
        .then(()=>{
            res.status(200).json(books)
        })
        .catch(()=>{
            res.status(500).json({error:"Could not Fetch the Doc !"})
        })
})

app.get('/books/:id' , (req,res)=>{

    if(ObjectId.isValid(req.params.id)){
        db.collection('books')
            .findOne({_id: ObjectId(req.params.id)})
            .then((doc)=>{
                res.status(200).json(doc)
            })
            .catch((err)=>{
                res.status(500).json({error : "Could not Fetch the Document"})
            })
    }else{
        res.status(500).json({error:"Not Valid Doc Id"})
    }
})

app.post('/books', (req,res)=>{
    const book = req.body

    db.collection('books')
        .insertOne(book)
        .then(result =>{
            res.status(201).json(result)
        })
        .catch(erroe=>{
            res.status(500).json({error:"Could not create a new Document !"})
        })
})

app.delete('/books/:id' , (req,res) => {

    if(ObjectId.isValid(req.params.id)){
        db.collection('books')
            .deleteOne({_id: ObjectId(req.params.id)})
            .then(result=>{
                res.status(200).json(result)
            })
            .catch((err)=>{
                res.status(500).json({error : "Could not Delete the Document"})
            })
    }else{
        res.status(500).json({error:"Not Valid Doc Id"})
    }
})

app.patch('/books/:id' , (req,res)=>{
    const updates = req.body

    if(ObjectId.isValid(req.params.id)){
        db.collection('books')
            .updateOne({_id: ObjectId(req.params.id)} , {$set:updates })
            .then(result=>{
                res.status(200).json(result)
            })
            .catch((err)=>{
                res.status(500).json({error : "Could not Update the Document"})
            })
    }else{
        res.status(500).json({error:"Not Valid Doc Id"})
    }
})