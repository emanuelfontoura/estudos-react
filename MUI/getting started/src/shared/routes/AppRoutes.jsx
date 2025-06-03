import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Produtos from '../../pages/Produtos.jsx';
import Contato from '../../pages/Contato.jsx';
import NotFound from '../../pages/NotFound.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="produtos/*" element={<Produtos />} />
      <Route path="contato" element={<Contato />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
