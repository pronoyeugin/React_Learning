import React, { useState } from 'react';
import Todos from './Todos';
import style from './home.module.css';
import Form from './Form';
import { v4 as uuidv4 } from 'uuid';

function Home() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), todo }];
    });
  };

  const handleRemoveTodo = (id) => {
    setTodos((prevTodos) => {
      const filteredTodos = todos.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
  };

  return (
    <>
      <div className={style.container}>
        <h1 style={{ color: '#fff' }}>Complete Todo App </h1>
        <Form onAddTodo={handleAddTodo} />
        <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
      </div>
    </>
  );
}

export default Home;
