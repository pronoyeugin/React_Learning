import React from 'react'
import Card from 'react-bootstrap/Card';


function Todo(props) {

  return (
     <Card className="mb-2 shadow-sm" style={{ width: '100%', maxWidth: '400px' }}>
      <Card.Body className="py-2 px-3">
        <Card.Text className="mb-0 fs-5">
          {props.todo}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Todo;
