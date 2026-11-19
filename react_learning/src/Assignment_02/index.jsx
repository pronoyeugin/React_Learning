import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function CounterApp() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <h1 className="counter-title">Assignment-02 Counter App</h1>
      <div className="counter-wrapper">
        <div className="counter-card">
          <h1
            className={`count-display ${count > 0 ? 'text-success' : count < 0 ? 'text-danger' : ''}`}
          >
            Count: {count}
          </h1>
          <div className="button-group">
            <Button
              variant="primary"
              onClick={handleIncrement}
              disabled={count === 5}
            >
              +
            </Button>
            <Button
              variant="danger"
              onClick={handleDecrement}
              disabled={count <= -5}
            >
              -
            </Button>
            <Button
              variant="secondary"
              onClick={handleReset}
              disabled={count === 0}
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CounterApp;
