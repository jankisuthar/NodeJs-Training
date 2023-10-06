const express = require("express")
const bodyparser = require('body-parser')
const app = express()
const todoRouter = require('./routes/todo')

const mongoose = require('./db/config')
mongoose;


app.set("view engine",'ejs');
app.use(bodyparser.urlencoded({extended:true}))

app.use('/',todoRouter)


//about get
// app.get('/about',(req,res)=>{
//     res.send("welcome to about page")
// })


//listen server
app.listen(8000,()=>{
    console.log("server run on 8000 port");
})