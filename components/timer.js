import React from 'react'
import { useState, useEffect } from 'react';

const Timer = ({setShowModal}) => {
    const initialMinute = 0
    const initialSeconds = 30
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
                setShowModal(false)
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);            
          };
    });

    return (
        <div className="w-full ml-7">
        <h2 className='text-white text-2xl font-semibold mb-2.5'>{minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h2> 
        </div>
    )
}

export default Timer;