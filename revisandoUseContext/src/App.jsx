import React from 'react';
import Produtos from './Produtos';
import { UserStorage } from '../useContext';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <UserStorage>
      <BrowserRouter>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="home">Home</NavLink>
              </li>
              <li>
                <NavLink to="produtos">Produtos</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="produtos" element={<Produtos />} />
        </Routes>
      </BrowserRouter>
    </UserStorage>
  );
}

export default App;
