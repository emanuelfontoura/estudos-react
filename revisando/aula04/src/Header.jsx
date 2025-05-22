import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>HEADER</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="produtos">Produtos</NavLink>
          </li>
          <li>
            <NavLink to="contato">Contato</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
