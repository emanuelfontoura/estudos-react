import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Sobre from './Sobre.jsx'
import Home from './Home.jsx'
import Contato from './Contato.jsx'
import NaoEncontrada from './NaoEncontrada.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='sobre' element={<Sobre />} />
        <Route path='contato' element={<Contato />} />
        <Route path='*' element={<NaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
