import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const studentName = "Pronoy Eugin";
  const courseName = "React Learning";
  const classNo = "Class-02: JSX and JS Expression";
  const date = new Date();
  const dateName = date.getDate();
  const monthName = date.getMonth();
  const currentYear = date.getFullYear();

  return (
    <>
      <div>
        <h1>{studentName}</h1>
        <h3>{courseName}</h3>
        <p>{classNo}</p>
        <p>{dateName + "/" + monthName + "/" + currentYear}</p>
      </div>

    </>
  )
}

export default App
