import React from 'react'

const Button = () => {
  function handleClick(e){
    console.log(e)
  }
  return <button onClick={handleClick}>
    ENVIE
  </button>
}

export default Button