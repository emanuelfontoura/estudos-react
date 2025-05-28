import React from 'react';
import { UserContext } from '../useContext';

const Produtos = () => {
  const useContext = React.useContext(UserContext);

  return (
    <div>
      <h1>PRODUTOS</h1>
      <h2>{useContext.nome}</h2>
      <p>{useContext.contar}</p>
      <button onClick={() => useContext.adicionarDois()}>SOMAR</button>
    </div>
  );
};

export default Produtos;
