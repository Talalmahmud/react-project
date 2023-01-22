import React, { useEffect, useState } from 'react'

const Timer = () => {
    const[timer, setTimer] = useState(0)
    const[isActive, setIsActve] = useState(false)
    const[isnotActive, setIsnotActve] = useState(true)

    useEffect(()=>{
        let interval = null

        if(isActive && isnotActive === false){
            interval = setInterval(()=>{
                setTimer((timer) => timer + 1)
            },1000)
        }
        else{
            clearInterval(interval)
        }
        return () => {
            clearInterval(interval);
          }
    },[isActive, isnotActive])

    const inccreaseTime = () =>{
        setIsActve(true)
        setIsnotActve(false)
    }
    const decreaseTime = () =>{
        setIsnotActve(!isnotActive)
    }

    
  return (
    <div>
        <h3>{timer}</h3>
        <button onClick={inccreaseTime}>START</button>
        <button onClick={decreaseTime}>STOP</button>

    </div>
  )
}

export default Timer