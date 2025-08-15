const { v4: uuidv4} = require('uuid');
const todos = require('../models/todo')

const getTodos =(req, res)=>{
    res.status(200).json(todos)
};

const createTodo = (req, res) =>{
    const newTodo ={
        message: req.body.message,
        id: uuidv4(),
        completed: false 
    }
    todos.push(newTodo)
    res.status(201).json(newTodo)
}

const toggleTodo = (req, res, next) => {
  
      const { id } = req.params;
      const todo = todos.find(t => String(t.id) === id);
  
      if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
      }
  
      todo.completed = !todo.completed;
      res.json(todo);
   }

const deleteTodo = (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex(todo => String(todo.id) === id);
  
    if (index === -1) {
      return res.status(404).json({ message: "Todo not found" });
    }
  
    todos.splice(index, 1); 
    res.status(200).json({ message: "Todo deleted", id });
  };

  module.exports = {
    getTodos,
    createTodo,
    toggleTodo,
    deleteTodo
  }