import React, {useState} from 'react'


const ToggleDemo = () => {

  const [toggle, setToggle] = useState(true);

  return (
    <>
    <h5>Toggle Demo</h5>
    <div style={{margin:"1rem", backgroundColor: "red", padding:"1rem" }}>
        {toggle && (
          <p style={{color:"white"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, iure at libero aut ea id in eligendi, eaque fuga quo porro commodi, illum reprehenderit nostrum. Fugit maxime possimus aliquid non laudantium! Accusantium ex placeat fuga assumenda cum nulla asperiores ab inventore quam! Dicta, similique accusantium!
        </p>
        )}
        <div>
            <button onClick={() => {setToggle(!toggle)}}>{toggle ? 'Hide' : 'Show'}</button>
        </div>
        
    </div>


    </>
  )
}

export default ToggleDemo;
