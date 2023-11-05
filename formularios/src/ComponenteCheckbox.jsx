import React from 'react'

const ComponenteCheckbox = ({options, value, setValue, ...props}) => {
  const handleChange = ({target}) => {
    if(target.checked){
      setValue([...value, target.value])
    }else{
      setValue(value.filter(item => item !== target.value))
    }
  }

  const handleChecked = (option) => {
    return value.includes(option)
  }

  return <>
    {options.map((option, index) => {
      return <label key={index}>
        <input type="checkbox" checked={handleChecked(option)} name={option} id={option} onChange={handleChange} value={option} {...props}/>
        {option}
      </label>
    })}
  </>
}

export default ComponenteCheckbox