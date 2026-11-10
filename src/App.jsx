import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import './App.css'
// import  './Style.css'


function App() {
  const studentName = "Pronoy Eugin";
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
          <div className="card"> 
            <h3 className="cartdTitle" >{courseName}</h3>
            <p className="cardDesc">{classNo}</p>
            <p className="cardFooter">{dateName + "/" + monthName + "/" + currentYear}</p>
          </div>
      </div>

    </>
  )
}

export default App
