const express = require('express');
const { createTodo, updateTodo } = require('./type');
const { Todo } = require('./db');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/todo", async(req, res) => {
    const createPayload = req.body;
    const validatePayload = createTodo.safeParse(createPayload);
    if(!validatePayload.success){
        return res.status(411).json({
           msg : "You have sent wrong input"
        })
    }
    await Todo.create({
        title : validatePayload.data.title,
        description : validatePayload.data.description,
        completed : false
    })
    res.json({
        msg : "Todo created successfully"
    })
})

app.get("/todos", async(req, res) => {
    const todo = await Todo.find({});
    res.json({
        msg : "Todo fetched successfully",
        data : todo
    })
})

app.put('/completed',async (req, res) => {
    const updatePayload = req.body;
    const validatePayload = updateTodo.safeParse(updatePayload);
    if(!validatePayload.success){
        return res.status(411).json({
            msg : "You have sent wrong input"
        })
    }
    const todo = await Todo.updateOne({
        _id : req.body.id
    }, {
        completed : true
    })
    res.json({
        msg : "Todo updated successfully",
        data : todo
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});