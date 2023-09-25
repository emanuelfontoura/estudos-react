import React from 'react'

const Titulo = (props) => {
  return <h1 style={{color: props.cor}}>{props.children ? props.children : props.texto}</h1>
}

const Propriedades = () => {
  return <>
    <Titulo cor="purple" texto="Título1" />
    <Titulo>
      Titulo2
      <p>OI</p>
    </Titulo>
  </>
}

export default Propriedades