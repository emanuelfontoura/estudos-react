import React from "react";

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const dados = luana;

  const total = dados.compras.map(item => {
    return +item.preco.substring(2).trim()
  }).reduce((acc, item) => {
    return acc+item
  })

  console.log(total)

  return <>
    <h1>EXERCÍCIO</h1>
    <div style={{marginTop: '30px'}}>Nome: {dados.cliente}</div>
    <div>Idade: {dados.idade}</div>
    <div>Situação: {' '}
      <span style={{color: dados.ativa ? 'green' : 'red'}}> {dados.ativa ? 'Ativa' : 'Inativa'} </span>
    </div>
    <div>Total gasto: R$ {total}</div>
    <div>{total >= 5000 ? 'Você está gastando muito!': 'Você não está gastando muito.'}</div>
  </>
};

export default App