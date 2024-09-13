const mongoose = require('mongoose');
const { string } = require('zod');

mongoose.connect("mongodb+srv://chandrucp987:chandru987@cluster0.pxh1p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const Todo = mongoose.model("Todo", todoSchema);

module.exports = {
    Todo
}

