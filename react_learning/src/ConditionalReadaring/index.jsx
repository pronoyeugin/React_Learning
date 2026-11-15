import React, { Component } from 'react'
import HomePage from './HomePage';
import LoginPage from './LoginPage';

 class ConditionalReadaring extends Component {

    constructor(props) {
      super(props)

      this.state = {
        isLogedIn:true
      }
    }
    
  render() {

    //First Method : Coditional Rendaring  

    // if (this.state.isLogedIn) {
    //   return <HomePage />
    // } else {
    //   return <LoginPage />
    // }



    // Sceond Method : With Element Variable Coditional Rendaring 

    // const {isLogedIn} = this.state
    // let element;

    // if (isLogedIn) {
    //   element = <HomePage />
    // } else {
    //   element = <LoginPage />
    // }

    // return (
    //   <div>{element}</div>
    // )


    // third Method : turnary operator

    const {isLogedIn} = this.state
    // let element;
    // element = isLogedIn ? <HomePage /> : <LoginPage /> ;
    //  return (
    //   <div>{element}</div>
    // )

     return (
      <div>{isLogedIn ? <HomePage /> : <LoginPage />}</div>
    )

  }
}

export default ConditionalReadaring;
