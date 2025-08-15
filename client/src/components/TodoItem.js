import React from 'react';

const TodoItem = ({todo, toggleComplete, deleteTodo}) => {
    return(
      <div className ="todoItem">
        <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
        className="todoCheckbox"
      />
      <span className={todo.completed ? "todoText completed" : "todoText"}>
        {todo.message}
      </span>
      <button className="deleteButton" onClick={() => deleteTodo(todo.id)}>✕</button>
      </div>
    )
}

export default TodoItem;