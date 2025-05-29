import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Contato from '../pages/Contato.jsx';
import Produtos from '../pages/Produtos.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
};

export default AppRoutes;
