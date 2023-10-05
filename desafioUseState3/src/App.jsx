import React from 'react'
import Produto from './Produto.jsx'

function App() {
  const [dados, setDados] = React.useState(null)

  async function handleClick(e){
    console.log(e.currentTarget)
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${e.currentTarget.innerText}`)
    const json = await response.json()
    setDados(json)
  }

  return <div>
    <div style={{display: 'flex', gap: '15px'}}>
      <button onClick={handleClick}>smartphone</button>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>tablet</button>
    </div>
    <Produto dados={dados}/>
  </div>
}

export default App
