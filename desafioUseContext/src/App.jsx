import React from 'react'
import { GlobalStorage } from './GlobalContext'
import Produtos from './Produtos'

function App() {

  return <GlobalStorage>
    <Produtos />
  </GlobalStorage>
}

export default App
