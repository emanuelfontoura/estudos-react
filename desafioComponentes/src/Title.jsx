import React from 'react'

const Title = ({text, color, ...props}) => {
  return <h1 style={{color:color, fontSize:"2.5rem"}} {...props}>{text}</h1>
}

export default Title