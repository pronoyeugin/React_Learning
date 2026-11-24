import React, { useState } from 'react';
import Style from './Style.module.css';

const TodoForm = ({onAddTodo }) => {

const [todo, setTodo] = useState({ title: '', desc: '' });

const handleChange = (event) => {
    const { name, value } = event.target; 
    setTodo((prevTodos) => ({...prevTodos, [name]: value }));
}

const handleSubmit = (event) => {
    event.preventDefault();
     onAddTodo(todo);

     setTodo({title: '', desc:''});
}

  return (
    <>
        <form className={Style['todo-form']} onSubmit={handleSubmit}>
            <div className={Style['form-group']}>
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" id="title" onChange={handleChange}  value={todo.title} required />
            </div>

            <div className={Style['form-group']}>
                <label htmlFor="desc">Desc: </label>
                <textarea type="text" name="desc" id="desc" onChange={handleChange} value={todo.desc} required />
            </div>
            <button type="submit" className={Style['submit-btn']}>Add task</button>
        </form>
    </>
  )
}

export default TodoForm;
