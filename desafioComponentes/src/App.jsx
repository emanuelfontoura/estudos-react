import React from 'react'
import Produtos from './Produtos.jsx';
import Home from './Home.jsx';
import Header from './Header'

function App() {
  const {pathname} = window.location

  let Component;
  if (pathname === '/produtos'){
    Component = Produtos
  }else{
    Component = Home
  }

  return <section>
    <Header />
    <Component />
  </section>
}

export default App