import React from 'react'
import Title from './Title';

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Produtos = () => {
  return <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
    <Title text='Produtos' color='#4c8b64'/>
    {produtos.map(produto => {
      return <div style={{border: '1px solid black', padding: '15px'}}>
        <h1>{produto.nome}</h1>
        <ul style={{listStyle: 'square'}}>
          {produto.propriedades.map(propriedade => {
            return <li>{propriedade}</li>
          })}
        </ul>
      </div>
    })}
  </div>
}

export default Produtos