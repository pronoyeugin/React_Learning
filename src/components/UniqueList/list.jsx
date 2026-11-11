import React from 'react'
import { v4 as uuidv4 } from 'uuid';


const todos = [
    {
        id : uuidv4(),
        title: "todos1",
        desc: "todo1 Description 1"
    },
    {
        id : uuidv4(),
        title: "todos2",
        desc: "todo1 Description 2"
    },
    {   
        id : uuidv4(),
        title: "todos3",
        desc: "todo1 Description 3"
    },
    {    
        id : uuidv4(),
        title: "todos4",
        desc: "todo1 Description 4"
    }
];



const List = () => {
    
    return (
        <div>
            {todos.map((todo) => {
                const { id, title, desc } = todo;
                return (
                    <div key={id}>
                        <h3>{title}</h3>
                        <p>{desc}</p>
                    </div>
                );
            })}
        </div>
    );

};

export default List;

