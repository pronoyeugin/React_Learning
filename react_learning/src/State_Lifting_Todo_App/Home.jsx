import React, {useState} from 'react';
import Todos from './Todos';
import NewTodo from './NewTodo';

const dummyTodos = ['todo1' , 'todo2'];

const Home = () => {
    const [todos, setTodos] = useState (dummyTodos);

    const handleNewTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    }

  return (
    <>  
        <h5>State Lifting | Todo App </h5>
        <div style={{ maxWidth: '500px', margin: '40px auto', padding: '0 15px' }}>
            <NewTodo onTodo={handleNewTodo} />
            <div className="mt-4">
                <Todos todos={todos} />
            </div>
        </div>
    </>
  );
}

export default Home;
