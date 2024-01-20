import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Head from './Components/Head.jsx'
// ROTAS
import Produtos from './Components/Produtos.jsx'
import Produto from './Components/Produto.jsx'
import Contato from './Components/Contato.jsx'

function App() {

  return <>
    <BrowserRouter>
      <Head title='Ranek | Produtos' description="Página de produtos" />
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Produtos />} />
          <Route path='produtos/:id' element={<Produto />} />
          <Route path='contato' element={<Contato />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </>
}

export default App
