import React, {useState} from 'react'
import Todos from './Todos';
import Style from './Style.module.css';


const TodoApp = () => {
    const[todos, setTodos] = useState([
        {
            id:1,
            title:"Title-01",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque commodi voluptates"
        },
        {
            id:2,
            title:"Title-02",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque commodi voluptates"
        }
    ]);

     const handleAddTodo = (newTodo) => {
        setTodos((prevTodos) => [...prevTodos, newTodo]);
     }

  return (
    <div className={Style.container}>
      <div className={Style.header}>
        <h2>Assignment: 03</h2>
        <p>Create Todo App: useState(), Controlled component, State lifting</p>
      </div>

        <Todos todos={todos} onAddTodo={handleAddTodo} />
    </div>
  )
}

export default TodoApp;
