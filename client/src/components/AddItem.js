import React, {useRef} from 'react';

const AddItem = ({createTodo}) => {
    const todoInput =useRef('');
    const handleSubmit = (e) => {
        e.preventDefault();

        createTodo(todoInput.current.value);
        todoInput.current.value = "";
     }
    return(
        <div className="appTodo">
        <div className="inputTodoContainer">
            <form className="inputTodoForm" onSubmit={handleSubmit}>
                <input 
                type="text" 
                className="inputTodo" 
                ref={todoInput} 
                placeholder="Add anew task..." required/>
                <button type="submit" className="inputButton">Add</button>
            </form>
        </div>
   </div>
    )
}

export default AddItem;