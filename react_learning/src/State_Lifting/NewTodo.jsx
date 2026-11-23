import React from 'react';

function NewTodo(props) {
  props.onhandleNewTodo({ title: 'I am new Todo' });

  return (
    <>
      <h5>state lifting | parent to child child to parent compo data pass</h5>
      <div>New Todo</div>
    </>
  );
}

export default NewTodo;
