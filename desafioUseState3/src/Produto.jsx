import React from 'react'

const Produto = (props) => {
  return <div>
    <h1>{props.dados.nome}</h1>
    <p style={{fontSize: '1.5rem', fontWeight: 'bold'}}>R$ {props.dados.preco},00</p>
    <p>{props.dados.descricao}</p>
    <img src={props.dados.fotos[0].src} alt={props.dados.fotos[0].titulo} />
  </div>
}

export default Produto