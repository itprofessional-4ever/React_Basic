import React from 'react'

const Button = (props) => {
    return (
        <div style={{color:"blue", background:"cyan", borderRadius: "5px"}}>{props.buttonText}
        </div>
    )
}

export default Button
