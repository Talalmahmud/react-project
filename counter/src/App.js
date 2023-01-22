import React, { useState } from 'react'
import './App.css'
import Timer from './compoonents/Timer'

const App = () => {
  const [counterValue, setCounterValue] = useState(0)
  return (
    <div className='container'>
      <div className='counter-head'>
      <h2>{counterValue}</h2>
      </div>
      <div className='counter-button'>
      {counterValue > 0 ? <button onClick={() => setCounterValue(counterValue - 1)} >DSCREASE</button> : <button style={{opacity: 0.3}}  disabled>DSCREASE</button>  } 
      <button onClick={() => setCounterValue(0)}>RESET</button>
      <button onClick={() => setCounterValue(counterValue + 1)}>INCREASE</button>
      </div>
      <Timer />
    </div>
  )
}

export default App