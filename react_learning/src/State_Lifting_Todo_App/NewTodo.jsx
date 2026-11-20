import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const NewTodo = (props) => {

    const [todo, setTodo] = useState ("");

    const handleInputChange = (event) => {
        setTodo(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onTodo(todo);
    };

  return (
    <>
        <Form onSubmit={handleSubmit}>
            <div className="d-flex align-items-center gap-2">
             <label htmlFor="todo" className="mb-0 fw-bold">New Todo:</label>
            <input 
                type="text"
                id="todo"
                name="todo"
                value={todo}
                className="form-control w-50"
                placeholder="Write your task here..."
                onChange={handleInputChange}
                />
             <Button type="submit" variant="success">Add Todo</Button>
            </div>
        </Form>
    
    </>
  )
}

export default NewTodo;
