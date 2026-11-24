import React from 'react'
import TodoForm from './TodoForm';
import Style from './Style.module.css';

const Todos = ({todos, onAddTodo}) => {

  return (
    <div>

        <TodoForm onAddTodo={onAddTodo} />

        <div className={Style['todo-list']}>
            
            {todos.map((todo) => (
            <div key={todo.id} className={Style['todo-item']}>
                <h4>{todo.title}</h4>
                <p>{todo.desc}</p>
            </div>
            ))}
        </div>
      
    </div>
  )
}

export default Todos;
