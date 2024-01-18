import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header.jsx'
import Produtos from "./Components/Produtos.jsx";
import Contato from "./Components/Contato.jsx";
import Footer from './Components/Footer.jsx'
import Produto from './Components/Produto.jsx';
import './App.css'

function App() {

  return <>
    <BrowserRouter>
      <Header />
      <div className='content'>
        <Routes>
              <Route path="/" element={<Produtos />}/>
              <Route path='produto/:id' element={<Produto />} />
              <Route path="contato" element={<Contato />}/>
          </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </>
}

export default App
