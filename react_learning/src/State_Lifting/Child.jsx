import React from 'react'

function Child(props) {

    const data = "I am from Child Component";
    props.onChildData(data);

  return (
    <>
        <h5>Passing data from child to parent component</h5>
        <div>
            <p>I am Child Components</p>
            <p>{props.data}</p>
        </div>
        
    </>
  );
}

export default Child;
