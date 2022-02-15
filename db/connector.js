const mongoose=require('mongoose')

// const connectionString=
// 'mongodb+srv://ermias:demed055@cluster0.xr3tk.mongodb.net/tasks?retryWrites=true&w=majority'


const connectDB=(url)=>{
    return mongoose.connect(url,{
        useNewUrlParser:true,
       
        useUnifiedTopology:true
    
    
    })
}
module.exports=connectDB;
// .then(()=>{
//     console.log('connected to the mongo db...')
// })
// .catch((err)=>{
//     console.log(err)

// })