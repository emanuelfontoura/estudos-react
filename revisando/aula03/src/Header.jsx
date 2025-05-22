import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="produtos" end>
        Home
      </NavLink>
    </nav>
  );
};

export default Header;
