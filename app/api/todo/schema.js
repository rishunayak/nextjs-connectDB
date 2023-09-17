import mongoose from 'mongoose';


const todoSchema = new mongoose.Schema({
    title: {type:String,require:true},
    status: {type:Boolean,require:true}
  });

  const TodoModel=mongoose.model("todos",todoSchema)

  export default TodoModel  