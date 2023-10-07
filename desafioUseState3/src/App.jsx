import React from 'react'
import Produto from './Produto.jsx'

function App() {
  const [dados, setDados] = React.useState(null)
  const [carregando, setCarregando] = React.useState(null)

  async function handleClick(event){
    setCarregando(true)
    console.log(event)
    const objResponse = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
    const json = await objResponse.json()
    setDados(json)
    setCarregando(false)
  }

  return <div>
    <div style={{display: 'flex', gap: '15px'}}>
      <button onClick={handleClick}>smartphone</button>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>tablet</button>
    </div>
    {carregando && <p>Carregando...</p>}
    {!carregando && dados && <Produto dados={dados} />}
  </div>
}

export default App