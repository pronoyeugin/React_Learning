import React, {useState, useEffect} from 'react'

const DataFetch = () => {

    const  {data, isLoading, error} = useFetch("https://jsonplaceholder.typicode.com/todos");
    const LoadingMessage = <p>Todo is Loading </p>;
    const ErrorMessage = <p> {error} </p>

    const todosElement = 
    data && 
    data.map((todo) => {
            return <p key={todo.id}> {todo.title}</p>
    });

  return (
    <>
        <h5>useEffect - Data Fetch</h5>
        <div>
            {error && ErrorMessage}
            {isLoading && LoadingMessage}
            {todosElement}
        </div>
    </>
   
  )
}

export default DataFetch;
