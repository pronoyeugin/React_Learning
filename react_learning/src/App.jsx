import React from 'react';
import { useState } from 'react';
import heroImg from './assets/hero.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import { HiH1 } from 'react-icons/hi2';
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiFillAccountBook,
  AiFillFacebook,
} from 'react-icons/ai';
import ReactBootstrap from './components/ReactBootstrap';
import State from './components/State';
import ConditionalReadaring from './ConditionalReadaring/index';
import EventHandlerClass from './EventHandler/index'
import EventBinding from './EventBinding';

//Functional component start with capital letters

function Welcome2() {
  //simple method
  return <h1>Welcome</h1>;
}

function Welcome1() {
  // under the hood method
  return React.createElement('h1', {}, 'welcome');
}

function Todo1() {
  //simple method
  return (
    <div>
      <p>Todo title</p>
      <p>Todo desc</p>
    </div>
  );
}

function Todo2() {
  // under the hood method
  return React.createElement(
    'div',
    {},
    React.createElement('p', {}, 'Todo Title'),
    React.createElement('p', {}, 'Todo Desc')
  );
}

function App() {
  return (
    <>
      <div className="component-section">
        <Card1 name="Card-1" desc="This is Card 1" />
        <Card2 name="Card-2" desc="" />
      </div>

      <div className="component-section">
        <Welcome1 />
      </div>

      <div className="component-section">
        <Todo1 />
      </div>

      <div className="component-section">
        <h5>React Components Example </h5>
        <Todo2 />
      </div>

      <div className="component-section">
        <h5>React Icon Example </h5>
        <span>
          <AiFillLinkedin className="" />
          <AiFillGithub />
          <AiFillFacebook />
          <AiFillInstagram />
          <AiFillAccountBook />
        </span>
      </div>

      <div className="component-section">
        <ReactBootstrap />
      </div>

      <div className="component-section">
        <State />
      </div>

      <div className="component-section">
        <ConditionalReadaring />
      </div>

      <div className="component-section">
        <EventHandlerClass />
      </div>

      <div className="component-section">
          <EventBinding />
      </div>


    </>
  );
}

export default App;
