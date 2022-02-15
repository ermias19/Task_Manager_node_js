const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true, "must be provided"],
    },
    completed: {
        type:Boolean,
        default:false,
    }
})

module.exports= mongoose.model('Task',TaskSchema)