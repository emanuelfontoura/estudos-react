import React from 'react'
import {BrowserRouter, Routes, Route, NavLink, useLocation} from 'react-router-dom'
import Sobre from './Sobre.jsx'
import Home from './Home.jsx'
import Contato from './Contato.jsx'
import NaoEncontrada from './NaoEncontrada.jsx'
import Login from './Login.jsx'
import Produto from './Produto.jsx'
import Header from './Header.jsx'
import './Style.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <nav style={{display: 'flex', gap: '15px'}}>
          <NavLink to='/' end >Home</NavLink>
          <NavLink to='sobre' >Sobre</NavLink>
          <NavLink to='contato' >Contato</NavLink>
          <NavLink to='login' >Login</NavLink>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='sobre' element={<Sobre />} />
          <Route path='contato' element={<Contato />} />
          <Route path='*' element={<NaoEncontrada />} />
          <Route path='login' element={<Login />} />
          <Route path='produto/:id' element={<Produto />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
