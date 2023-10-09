import React from 'react'
import Produto from './Produto.jsx'

function App() {
  const [produto, setProduto] = React.useState(null)

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto')
    if (produtoLocal !== 'null'){
      setProduto(produtoLocal)
    }
  }, [])

  React.useEffect(() => {
    if (produto !== null){
      window.localStorage.setItem('produto', produto)
    }
  }, [produto])

  function handleClick(event) {
    setProduto(event.target.innerText)
  }

  return <div>
    <h1>Preferência: {produto}</h1>
    <button onClick={handleClick}>notebook</button>
    <button onClick={handleClick} style={{marginLeft:'15px'}}>smartphone</button>
    <Produto produto={produto}/>
  </div>
}

export default App
