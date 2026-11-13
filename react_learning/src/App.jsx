import { useState } from 'react';
import heroImg from './assets/hero.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';
import Card1 from './components/Card1';
import Card2 from './components/Card2';

function App() {
  

  return (

    <div>

        <Card1  name="Card-1" desc="This is Card 1"/>

        <Card2 name="Card-2" desc=""/>

    </div>
  );
}

export default App;


