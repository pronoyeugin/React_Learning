import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Event_Bubbling() {
  const handleClildClick = (event) => {
    event.stopPropagation();
    console.log('Clild event : ', event);
  };

  const handleParentclick = (event) => {
    console.log('Parent event : ', event);
  };

  return (
    <>
      <h5>Event Bubbling | stopPropagation</h5>
      <div className="parent" onClick={handleParentclick}>
        <h1>Welcome</h1>
        <Button onClick={handleClildClick}>+</Button>
      </div>
    </>
  );
}
