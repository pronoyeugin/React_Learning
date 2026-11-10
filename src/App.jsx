import React from 'react'
import './Style.css'
import Card from './components/Card'

const studentName = 'Pronoy Eugin'

function App() {
  return (
    <div>

      <h1 className="headingStyle">{studentName}</h1>
      <Card titleText ="Call Mother" descText="This is Desc-1" />
      <Card titleText ="Call Mother" descText="This is Desc-1" />
      <Card titleText ="Call Mother" descText="This is Desc-1" />
    

    </div>
  )
}

export default App
