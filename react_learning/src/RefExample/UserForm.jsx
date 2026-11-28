import React, { Component, createRef } from 'react'

 class UserForm extends Component {

    constructor(props) {
      super(props)
      this.userNameRef =createRef();
      this.state = {
         
      }
    }
     handleSubmit =(e)=>{
        e.preventDefault();
        console.log(this.userNameRef.current.value);
     }

  render() {

    return (
      <>
        <h5>Ref in a class component with example</h5>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="userName">UserName: </label>
                <input
                    type="text" 
                    name="userName"
                    id="userName"
                    ref ={this.userNameRef}
                />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" />
            </div>
            <button type="submit">Register</button>
        </form>
        
      </>
    )
  }
}

export default UserForm;
