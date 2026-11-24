import React, { useEffect, useState } from 'react'

const useEffectExamp = () => {

    const [count, setCount] = useState(0);
    const [isloading, setIsloading] = useState();

    const handleClick = () => {
      setCount((prevCount) => prevCount + 1);
    }

    useEffect(() => {
        console.log("useEffect");
    },[count]);

    return (
    <>
    <div>
        {console.log("rendering")}
      <h5>useEffect Example</h5>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>+</button>
      <button onClick={() => {setIsloading(!isloading)}}>isLoading</button>
    </div>
    </>
    
  )
}

export default useEffectExamp;
