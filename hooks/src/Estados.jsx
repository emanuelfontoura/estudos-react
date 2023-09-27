import React from 'react'

const Estados = () => {
  const estado = false; // true = ativo; false = desativo;

  return <div>
    <button disabled={!estado}>{estado?'ATIVO':'DESATIVO'}</button>
  </div>
}

export default Estados