import React, {useState, useEffect} from 'react'

const DataFetch = () => {

    const [todos, setTodos] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
            if(!res.ok){
                throw Error("fetch is not succesfull")
            } else{
                return res.json();
            }
        })
        .then((data)=> {
            setTodos(data);
            setIsLoading(false)
            setError(null);
        })
        .catch((error) => {
            setError(error.message);
            setIsLoading(false)
        })
        },[]);

    const todosElement = 
    todos && 
    todos.map((todo) => {
            return <p key={todo.id}> {todo.title}</p>
    });

    const LoadingMessage = <p>Todo is Loading </p>;


  return (
    <>
        <h5>useEffect - Data Fetch</h5>
        <div>
            {error && <p> {error} </p>}
            {isLoading && LoadingMessage}
            {todosElement}
        </div>
    </>
   
  )
}

export default DataFetch
