import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../../pages/NotFound';
import EditarProduto from '../../pages/EditarProduto.jsx';
import VisualizarProduto from '../../pages/VisualizarProduto.jsx';
import ExcluirProduto from '../../pages/ExcluirProduto.jsx';
import Produtos from '../../pages/Produtos.jsx';

const ProdutosRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Produtos />} />
      <Route path="editar" element={<EditarProduto />} />
      <Route path="visualizar" element={<VisualizarProduto />} />
      <Route path="excluir" element={<ExcluirProduto />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default ProdutosRoutes;
