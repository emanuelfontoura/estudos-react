import React from 'react'

const ComponenteSelect = ({options, value, setValue, ...props}) => {
  return <>
    <select value={value} onChange={({target}) => setValue(target.value)} {...props}>
      <option value="" disabled>Seleciona uma opção</option>
      {options.map((option, index) => {
        return <option key={index} value={option}>{option}</option>
      })}
    </select>
  </>
}

export default ComponenteSelect