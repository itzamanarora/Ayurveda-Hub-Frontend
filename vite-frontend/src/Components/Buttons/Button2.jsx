import React from 'react'
import './Button.css';

function Button2({text, bgColor, textColor, height, width, bgColorhover, textColorhover}) {
  return (
    <button style={{
        backgroundColor: bgColor,
        color: textColor,
    }}
    className='button2'
    onMouseOver={(e) => (e.target.style.backgroundColor = bgColorhover)}
    onMouseOut={(e) => (e.target.style.backgroundColor = bgColor)}
    >{text}</button>
  )
}

export default Button2