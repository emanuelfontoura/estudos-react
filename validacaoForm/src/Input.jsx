import React from 'react'

const Input = ({id, label, value, onChange, ...props}) => {
  return <div>
    <label htmlFor={id}>{label}</label>
    <input type="text" name={id} id={id} value={value} onChange={onChange} {...props}/>
  </div>
}

export default Input