import { useState } from 'react';
import heroImg from './assets/hero.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
      <div>
            <header>
                <h1>A template for React Project</h1>
            </header>
            <main>
                <h1>Welcome to React</h1>
            </main>
            <footer>
                
                <p className="right">Developed with &hearts; by Pronoy Eugin</p>
            </footer>
        </div>

  
  );
}

export default App;
