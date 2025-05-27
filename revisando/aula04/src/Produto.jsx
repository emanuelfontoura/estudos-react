import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProdutoData from './ProdutoData.jsx';
import EditarProduto from './EditarProduto';

const Produto = () => {
  return (
    <Routes>
      <Route path="/" element={<ProdutoData />} />
      <Route path="editar" element={<EditarProduto />} />
    </Routes>
  );
};

export default Produto;
