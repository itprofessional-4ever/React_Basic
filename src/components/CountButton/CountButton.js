import React, { useState, useEffect } from 'react';
import './CountButton.css'

const CountButton = (props) => {
    const [currentCount, setCurrentCount] = useState(0)

    const handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy)
    }

    useEffect(()=>{
        if(currentCount === 10) {
            setCurrentCount(0)
        }
    }, [currentCount])

    useEffect(()=>{
        console.log("Called when component mounts or the currentCount is updated")
    }, [currentCount])

    const buttonStyles = {
        background: props.buttonColor
    }

    return (
        <div>
            <button onClick={handleClick}>+{props.incrementBy}</button>
            <div className='count-display'>{currentCount}</div>
        </div>
    )
}
export default CountButton