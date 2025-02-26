const express = require("express");
const todoRouter = express.Router();
const todoModel = require("../models/todo.model");
//Create Todo: Users can add new todos.
todoRouter.post("/create", async (req, res) => {
  try {
    const { title, description, status } = req.body;
    if(!title){
        res.status(400).json({msg:"Title is required"})
    }
    const newTodo = new todoModel({ title, description, status });
    await newTodo.save();
    res.status(201).json({ msg: "Todo created successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Failed to create todo" });
  }
});
//Read Todos: Users can view a list of all todos.
todoRouter.get("/", async (req, res) => {
  try {
    const getTodos = await todoModel.find();
    console.log(getTodos)
    res.status(200).json({msg:"List of todos"});
    
  } catch (err) {
    res.status(500).json({ msg: "Failed to get todo" });
  }
});
//Update Todo: Users can update any todo by its id
todoRouter.put("/:id", async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    console.log(updatedTodo)
    res.status(200).json({msg:"Todo updated successfully"});
  } catch (error) {
    
    res.status(500).json({ msg: "Internal server error" });
  }
  
})
todoRouter.delete("/:id", async (req, res) => {
  try {
    const deleteTodos = await todoModel.findByIdAndDelete(req.params.id, {
      new: true,
    });
    if (!deleteTodos) {
        return res.status(404).json({ msg: "Todo not found" });
      }
    res.status(200).json({msg:"Todo deleted successfully"});
  } catch (err) {
    res.status(500).json({ msg: "Failed to update todo" });
  }
});
module.exports = todoRouter;
