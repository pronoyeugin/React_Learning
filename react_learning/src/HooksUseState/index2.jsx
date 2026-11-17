import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';

 function HooksUseState2() {

  const [count, setCount] = useState(0)
  const handleIncrement = () => {
        setCount(count + 1);
    }

  return (
    <>
        <div>
            <h5>HooksUseState with Functional Components </h5>
            <h1>Count:{count}</h1>
            <Button onClick={handleIncrement}>+</Button>
        </div>
    </>
  )
}

export default HooksUseState2;
