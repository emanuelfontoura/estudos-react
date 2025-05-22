import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>PÁGINA NÃO ENCONTRADA</h1>
      <Link to="/">VOLTAR</Link>
    </div>
  );
};

export default NotFound;
