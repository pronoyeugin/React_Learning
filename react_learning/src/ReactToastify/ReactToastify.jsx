import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReactToastify = () => {

    const handleSignUp = () =>{
        toast("Sign up successfull");
    }

    const handleOrder = () =>{
        toast("Order Place successfull");
    }

  return (
    <>
        <h5>React Notification -  react-toastify</h5>
        <div>
            <h4>sign Up </h4>
            <button onClick={handleSignUp}>Sign Up</button>
            <ToastContainer />
            <button onClick={handleOrder}>Order</button>
            <ToastContainer />
        </div>
    </>
  )
}

export default ReactToastify;
