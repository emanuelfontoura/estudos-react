import React from 'react'
import './App.css'
import Button from './Components/Button.jsx'
import Header from './Components/Header.jsx'
import Exemplo from './Components/Exemplo.jsx'
import Produtos from './Components/Produtos.jsx'
const Contato = React.lazy(() => import('./Components/Contato.jsx'))

const reducer = (state, action) => {
  switch (action){
    case 'aumentar':
      return state+1;
    case 'diminuir':
      return state-1
    case 'aumentar10':
      return state+10
    case 'diminuir10':
      return state-10
    default:
      return new Error('Action inválida!')
  }
}

function App() {
  const [count, setCount] = React.useState(0)

  const [state, dispatch] = React.useReducer(reducer, 0)

  return <>
    <Header />
    <h1>Botão</h1>
    <React.Suspense fallback={<div>Carregando...</div>}>
      <Contato />
    </React.Suspense>
    <Button text="CLIQUE AQUI" disabled={false} width={300} />
    <button onClick={() => setCount(count + 1)}>Somar: {count}</button>
    <h1>useReducer</h1>
    <button onClick={() => dispatch('diminuir')}>-1</button>
    <button onClick={() => dispatch('aumentar')}>+1</button>
    <p>{state}</p>
    <button onClick={() => dispatch('diminuir10')}>-10</button>
    <button onClick={() => dispatch('aumentar10')}>+10</button>
    <Exemplo />
    <h1>Classes</h1>
    <Produtos title='Meus produtos' />
  </>
}

export default App
