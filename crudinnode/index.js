const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://monisha:monisha@cluster0.xcnrz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const app = express()

mongoose.connect(url,{useNewUrlParser:true})

const con = mongoose.connection

con.on('open',function(){
    console.log('connected...')
})

app.use(express.json())

const alienRouter = require('./routes/alien')
app.use('/alien',alienRouter)

app.listen(9000,function(){
    console.log("server started")
})