import React from 'react'
import './Animations.css'
import Produto from './Components/Produto.jsx'

function App() {
  const [ativar, setAtivar] = React.useState(false)

  return <>
    <button onClick={() => setAtivar(!ativar)}>Ativar</button>
    {ativar && <Produto />}
  </>
}

export default App
