import React from 'react';
import Button from 'react-bootstrap/Button';
import { MdDelete } from 'react-icons/md';
import style from './home.module.css';

function Todo(props) {
  const { title, desc } = props.todo;
  const { id } = props;

  const handleDelete = (id) => {
    props.onRemoveTodo(id);
  };

  return (
    <article className={style.todo}>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div>
        <Button
          className={style.btn}
          variant="danger"
          onClick={() => {
            handleDelete(id);
          }}
        >
          <MdDelete />
        </Button>
      </div>
    </article>
  );
}

export default Todo;
