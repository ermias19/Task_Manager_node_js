const Task = require('../models/task')
const asyncWrappr=require('../middleware/async')
const getAllTask =  async(req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({success:true,data:{ tasks,nbHits:tasks.length} })
        console.log(tasks)

    }
    catch (err) {
        res.status(500).json({ msg: err })
    }
}


const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
        res.json(req.body)
    }
    catch (err) {
        res.status(500)
        res.json({ msg: err })

    }

}
const getTask = async (req, res) => {
    try {

        const { id: taskID } = req.params
        console.log(taskID)

        const task = await Task.findOne({ _id: taskID })
        console.log("ermias",task)
        if (!task) {
            console.log('ermias mulugeta', task)
            return res.status(404).json({ msg: `No task with id:${taskID}` })
         }
      

       return res.status(200).json({ task })

    }
    catch (err) {
        res.status(500).json({ msg: err })
    }

}
const updateTask =async (req, res) => {
    try{
        const {id:taskID}= req.params;
        const task= await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true,
        })
        if(!task){
            return res.status(404).json({msg:`no task with id:${ taskID}`})
        }
        res.status(200).json({task})
    }
    catch(err){
        res.status(500).json({err})
    }

}
const deleteTask = async (req, res) => {
    try{
        const{id:taskID}= req.params;
        const task= await Task.findOneAndDelete({_id:taskID});
        if (!task){
            return res.status(404).json({msg:`no task with the id:${taskID}`})
        }
        res.status(200).json({task,msg:'the task is purged'})
    }
    catch (error){
        res.status(500).json({msg:error})

    }
  
}


module.exports = {
    getAllTask, createTask, getTask, updateTask, deleteTask

}