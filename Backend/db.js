const mongoose = require('mongoose');
const { string } = require('zod');

mongoose.connect("mongodb://atlas-sql-66dbef1bf1b62b1b37cf845b-pxh1p.a.query.mongodb.net/test?ssl=true&authSource=admin")

const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const Todo = mongoose.model("Todo", todoSchema);

module.exports = {
    Todo
}

