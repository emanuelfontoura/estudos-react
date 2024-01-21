import React from 'react'
import './App.css'
import Button from './Components/Button.jsx'
import Header from './Components/Header.jsx'
const Contato = React.lazy(() => import('./Components/Contato.jsx'))

function App() {
  const [count, setCount] = React.useState(0)

  return <>
    <Header />
    <h1>Botão</h1>
    <React.Suspense fallback={<div>Carregando...</div>}>
      <Contato />
    </React.Suspense>
    <Button text="CLIQUE AQUI" disabled={false} width={300} />
    <button onClick={() => setCount(count + 1)}>Somar: {count}</button>
  </>
}

export default App
