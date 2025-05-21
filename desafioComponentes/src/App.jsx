import React from 'react';
import Produtos from './Produtos.jsx';
import Home from './Home.jsx';
import Header from './Header';
import Teste from './Teste.jsx';

function App() {
  const { pathname } = window.location;

  let Component;
  if (pathname === '/produtos') {
    Component = Produtos;
  } else {
    Component = Home;
  }

  return (
    <section>
      <Header />
      <Component />
      <Teste k="sei la" />
    </section>
  );
}

export default App;
