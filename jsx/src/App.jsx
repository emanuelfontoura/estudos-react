import React from 'react'
import Header from './Header.jsx'

const title = <h1>TÍTULO</h1>

function App() {
  const estilo1 = {
    color: 'blue',
    fontSize: '20px',
    fontFamily: 'Helvetica',
  }

  const state = true
  const data = new Date()
  return <>
    <div className={state ? 'on' : 'off'}>OI</div>

    <div style={{color: 'red', fontSize: '30px', fontFamily: 'monospace'}}>TESTE ESTILO INLINE</div>

    <div style={estilo1}>TESTE ESTILO EM OBJETO</div>
    
    {title}
    {true}
    {[1, 2, 3]}
    {'OLÁ'}
    {data.getDate()}
    <Header />
  </>
}

export default App