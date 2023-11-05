import React from 'react'

const ComponenteRadio = ({name, value, setValue, options, ...props}) => {
  return <>
    <h1>COMPONENTE RADIO</h1>
    {
      options.map((option, index) => {
        return <label key={index}>
          <input type="radio" checked={value === option} name={name} value={option} id={option} onChange={({target}) => setValue(target.value)} {...props}/>
          {option}
        </label>
      })
    }
  </>
}

export default ComponenteRadio