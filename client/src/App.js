import {useState, useEffect} from 'react';
import axios from 'axios';
import Todos from './components/Todos';
import AddItem from './components/AddItem';
import Preloader from './components/Preloader';
import Header from './components/Header';

import "./App.css";

function App() {
const [todos, setTodos] = useState([]);

useEffect(()=>{
  const getTodos = async ()=> {
    const res = await axios.get("http://localhost:5001/api/todos");
    setTodos(res.data);
  }

  getTodos();
}, []);

const createTodo = async (text) => {
  const res = await axios.post('http://localhost:5001/api/todos', {message: text});
  setTodos(prev => [...prev, res.data])
}

const deleteTodo = async (id) => {
  await axios.delete(`http://localhost:5001/api/todos/${id}`);
  setTodos(todos.filter(todo => todo.id !== id));
};

const toggleComplete = async (id) => {
  const res = await axios.put(`http://localhost:5001/api/todos/${id}`);
  setTodos(todos.map(todo => (todo.id === id ? res.data : todo)));
};

return (
    <div className= "App">
      <div className="container">
      <Header />
        <AddItem createTodo={createTodo}/>
      {todos ? <Todos 
      todos={todos}
      toggleComplete={toggleComplete}
      deleteTodo={deleteTodo}
      /> : <Preloader />}
      </div>       
    </div>
  )
}

export default App;
