import React from 'react';
import TodoItem from './TodoItem'

const Todos = ({todos, toggleComplete, deleteTodo}) => {
    if (!todos || todos.length === 0) {
        return <p>No todos found.</p>;
      }

    return(
        <div className="todoList">
            {todos.map((todo)=>(
                <TodoItem  
                key={todo.id} 
                todo={todo} 
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
};

export default Todos;