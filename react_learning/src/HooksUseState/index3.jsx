import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function HooksUseState3() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((preCount) => preCount + 1);
  };

  return (
    <div>
      <h5>HooksUseState update with prevoius value </h5>
      <h1>Count:{count}</h1>
      <Button onClick={handleIncrement}>+</Button>
    </div>
  );
}

export default HooksUseState3;
