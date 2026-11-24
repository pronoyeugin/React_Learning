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
import EventHandlerClass from './EventHandler/index';
import EventBinding from './EventBinding/index';
import HooksUseState from './HooksUseState/index';
import HooksUseState2 from './HooksUseState/index2';
import HooksUseState3 from './HooksUseState/index3';
import Event_Bubbling from './HooksUseState/index4';
import CounterApp from './Assignment_02/index';
import Form from './Form/Form';
import Form2 from './Form/Form2';
import Child from './State_Lifting/Child';
import Todo from './State_Lifting/Todo';
import NewTodo from './State_Lifting/NewTodo';
import StateLiftingTodoApp from './State_Lifting_Todo_App/Home';
import CompleteTodoApp from './CompleteTodoApp/Home';
import SignUp from './FormValidation/SignUp';
import Toggle from './Toggle/ToggleDemo';
import Faq from './Faq/Faqs';
import Assign3 from './Assignment_03/index';
import UseEffectExamp from './useEffect/useEffectExamp';
import DataFetch from './useEffect/DataFetch';

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
  const data = 'I am from Parent (App)';
  const handleChildData = (childData) => {
    console.log('App : ' + childData);
  };

  const handleNewTodo = (newTodo) => {
    console.log(newTodo);
  };

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

      <div className="component-section">
        <HooksUseState />
        <HooksUseState2 />
      </div>

      <div className="component-section">
        <HooksUseState3 />
      </div>

      <div className="component-section">
        <Event_Bubbling />
      </div>

      <div className="component-section">
        <CounterApp />
      </div>

      <div className="component-section">
        <Form />
      </div>

      <div className="component-section">
        <Form2 />
      </div>

      <div className="component-section">
        <Child data={data} onChildData={handleChildData} />
      </div>

      <div className="component-section">
        <NewTodo onhandleNewTodo={handleNewTodo} />
        <Todo title="Learn react.js" />
      </div>

      <div className="component-section"></div>

      <div className="component-section">
        <StateLiftingTodoApp />
      </div>

      <div className="component-section">
        <CompleteTodoApp />
      </div>

      <div className="component-section">
        <SignUp />
      </div>

      <div className="component-section">
          <Toggle />
      </div>

      <div className="component-section">
        <Faq />
      </div>

      <div className="component-section">
          <Assign3 />
      </div>

      <div className="component-section">
          <UseEffectExamp />
      </div>

      <div className="component-section">
          <DataFetch />
      </div>
      <div className="component-section"></div>

    </>
  );
}

export default App;
