import React, {useState, useEffect} from 'react'

const DataFetch = () => {

    const [todos, setTodos] = useState(null)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
            return res.json()
        })
        .then((data)=> {
            setTodos(data);
            console.log(todos);
        })
        },[])

  return (
    <>
        <h5>useEffect - Data Fetch</h5>
        <div>
        {todos && todos.map((todo) => {
            return <p key={todo.id}>{todo.title}</p>
        })}
        </div>
    </>
   
  )
}

export default DataFetch
