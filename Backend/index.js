const express = require('express');
const { createTodo, updateTodo } = require('./type');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/todo", (req, res) => {
    const createPayload = req.body;
    const validatePayload = createTodo.safeParse(createPayload);
    if(!validatePayload.success){
        return res.status(411).json({
           msg : "You have sent wrong input"
        })
    }
    // store the data in the database
})

app.get("/todos", (req, res) => {
})

app.put('/completed', (req, res) => {
    const updatePayload = req.body;
    const validatePayload = updateTodo.safeParse(updatePayload);
    if(!validatePayload.success){
        return res.status(411).json({
            msg : "You have sent wrong input"
        })
    }
    // store the data in the database
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});