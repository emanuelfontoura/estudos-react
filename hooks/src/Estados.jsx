import React from 'react'

const Estados = () => {
  let estado = false; // true = ativo; false = desativo;

  function handleClick(){
    if(estado === true){
      estado = false
    }else{
      estado = true
    }
    console.log(estado)
  }

  return <div>
    <button onClick={handleClick}>{estado?'ATIVO':'DESATIVO'}</button>
  </div>
}

export default Estados