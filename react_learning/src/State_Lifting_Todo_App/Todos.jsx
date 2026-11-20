import React from 'react'
import Todo from './Todo';

function Todos(props) {
 
  return (

    <div className="d-flex flex-column gap-2">
        {props.todos.map((todo,  index) => (
          <Todo key={index} todo={todo} />

      ))}
      
    </div>
  )
}

export default Todos;
