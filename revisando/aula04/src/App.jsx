import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Produtos from './Produtos.jsx';
import Home from './Home.jsx';
import Contato from './Contato.jsx';
import NotFound from './NotFound.jsx';
import Produto from './Produto.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="produtos" element={<Produtos />} />
          <Route path="produtos/:id/*" element={<Produto />} />
          <Route path="contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
