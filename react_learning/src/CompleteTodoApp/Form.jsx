import React, { useState } from 'react';
import style from './home.module.css';

const Form = ({ onAddTodo }) => {
  const [todo, setTodo] = useState({ title: '', desc: '' });

  const { title, desc } = todo;

  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTodo(todo);
    setTodo({ title: '', desc: '' });
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style['form-field']}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleChange}
        />
      </div>
      <div className={style['form-field']}>
        <label htmlFor="desc">Description:</label>
        <textarea name="desc" id="desc" value={desc} onChange={handleChange} />
      </div>

      <div className="d-flex justify-content-end">
        <button
          type="submit"
          className="btn btn-success"
          style={{ width: '30%' }}
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default Form;
