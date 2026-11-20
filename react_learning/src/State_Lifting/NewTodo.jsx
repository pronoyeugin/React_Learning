import React from 'react'

function NewTodo(props) {

    props.onhandleNewTodo({title : "I am new Todo"});

  return (

    <div>
      New Todo
    </div>
  )
}

export default NewTodo;
