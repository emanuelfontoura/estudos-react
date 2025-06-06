import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="produtos">Produtos</NavLink>
          </li>
          <li>
            <NavLink to="contato">Contato</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
