import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import  './Style.css'

function App() {
  const studentName = "Pronoy Eugin Khalko";
  const courseName = "React Learning";
  const classNo = "Class-02: JSX and JS Expression";
  const date = new Date();
  const dateName = date.getDate();
  const monthName = date.getMonth();
  const currentYear = date.getFullYear();

  // const headingStyle = {
  //     backgroundColor: "purple",
  //     color : "white",
  //     fontSize: "3rem",
  //     textAlign : "Center",
  //     padding: "15px"
  //   }

  return (
    <>
      <div>
        <h1 className="headingStyle">{studentName}</h1>
        {/* <h1 style ={headingStyle}>{studentName}</h1> */}
        <h3>{courseName}</h3>
        <p>{classNo}</p>
        <p>{dateName + "/" + monthName + "/" + currentYear}</p>
      </div>

    </>
  )
}

export default App
