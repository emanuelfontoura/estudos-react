import React from 'react'

const Input = ({id, label, ph, type, value, setValue, error, onChange, onBlur}) => {
  return <div>
    <label htmlFor={id}>{label}</label>
    <input type={type} placeholder={ph} name={id} id={id} value={value} onChange={onChange} onBlur={onBlur}/>
    {error && <p>{error}</p>}
  </div>
}

export default Input