import React from 'react';
import { useState } from 'react';
import heroImg from './assets/hero.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import { HiH1 } from 'react-icons/hi2';
import { FaLinkedin, } from "react-icons/fa";
import {  AiFillLinkedin, AiFillInstagram, AiFillGithub, AiFillAccountBook, AiFillFacebook } from 'react-icons/ai'
import ReactBootstrap from './components/ReactBootstrap';



//Functional component start with capital letters

function  Welcome2 () {
    //simple method
    return (<h1>Welcome</h1>);

}

function  Welcome1 () {
     // under the hood method
    return React.createElement("h1", {}, "welcome");

}

function  Todo1 () {
     //simple method
    return (
        <div>
            <p>Todo title</p>
            <p>Todo desc</p>
        </div>
    );
}

function  Todo2 () {
     // under the hood method
    return React.createElement("div", {}, 
        React.createElement("p", {}, "Todo Title"),
        React.createElement("p", {}, "Todo Desc"),
    );
}



function App() {

  return (
    <>
    
      <Welcome1 />

      <Todo1 />
      
      <Todo2 />

        <span>
            <AiFillLinkedin className=""/>
            <AiFillGithub />
            <AiFillFacebook />
            <AiFillInstagram />
            <AiFillAccountBook />
        </span>


        <ReactBootstrap />

      {/* <div>
        <Card1 name="Card-1" desc="This is Card 1" />
        <Card2 name="Card-2" desc="" />
      </div> */}

    </>
  );
}

export default App;


