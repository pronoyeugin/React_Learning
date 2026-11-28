import React, {useRef} from 'react'

const UserForm = () => {

const userNameRef = useRef();
const passwordRef = useRef();

const handleSubmit = (e) => {
    e.preventDefault();
    const userName = userNameRef.current.value;
    const password = passwordRef.current.value;
    userNameRef.current.style.color="red";
    console.log({userName, password});
}

  return (
    <>  
        <h5>React Hooks | useRef Hook</h5>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="userName">UserName: </label>
                <input type="text" id="userName" name="userName" ref={userNameRef} />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="text" id="password" name="password" ref={passwordRef} />
            </div>
            <button type="submit">Register</button>
        </form>
      
    </>
  )
}

export default UserForm;
