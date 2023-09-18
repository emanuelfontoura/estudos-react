import React from "react";

const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const titulo = <h1 style={{marginTop: '30px'}}>EXERCÍCIO 2</h1>

const App = () => {
  return <>
    <div>{titulo}</div>
    <div>
      {produtos.filter(produto => {
        return +produto.preco.replace('R$', '').trim() > 1500
      }).map(produto => {
        return <>
          <h1>{produto.nome}</h1>
          <p>{produto.preco}</p>
          <ul style={{display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none'}}>
            {produto.cores.map(cor => {
              return <li key={cor} style={{backgroundColor: cor, padding: '10px'}}>{cor}</li>
            })}
          </ul>
        </>
      })}
    </div>
  </>
}

export default App