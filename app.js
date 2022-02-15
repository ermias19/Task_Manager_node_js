const express=require('express');
const app= express();
var util= require('util');
var encoder = new util.TextEncoder('utf-8');
const taskrouter=require('./routes/task.js')
const connectDB =require('./db/connector')
require('dotenv').config()

app.use(express.json())
// routes
app.get('/hello',(req,res)=>{
    res.send('rask manager')
})

app.use('/api/vi/tasks',taskrouter)

const port= 3000

const start= async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        console.log("data base connected successfully")
        app.listen(port, console.log(`server is listening on port${port}`))
    }
    catch(err){
        console.log(err)
    }
}

start()