import React from 'react'

const ComponentesInput = ({id, label, setValue, ...props}) => {
  return <>
    <label htmlFor={id}>{label}</label>
    <input name={id} onChange={({target}) => setValue(target.value)} {...props}/>
  </>
}

export default ComponentesInput