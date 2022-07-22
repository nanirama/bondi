import React from 'react'
import { useState, useEffect } from 'react';

const Timer = ({setShowModal}) => {
    const initialMinute = 0
    const initialSeconds = 30
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    const [ barWidth, setBarWidth ] = useState(0);
    useEffect(()=>{
        
        console.log('barWidth',barWidth)
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
                let bwidth = parseInt(Math.round((100/(initialSeconds/seconds))))
                setBarWidth(bwidth)
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
                setShowModal(false)
                let bwidth = 0
                setBarWidth(bwidth)
            } 
            
            
        }, 1000)
        return ()=> {
            clearInterval(myInterval);            
          };
    },[barWidth]);
    const mywidth = 75

    return (
        <div className="w-full px-4 ">
            <div className="w-full bg-gray-500 h-0.5 border-1 border-solid">
            <div className="bg-gray-50 h-0.5 border-1 border-solid" style={{"width" : `${barWidth != 0 ? 100-barWidth: 0}%`}}>25</div>
            </div>
        {/* <h2 className='text-white text-2xl font-semibold mb-2.5'>{minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h2>  */}
        </div>
    )
}

export default Timer;