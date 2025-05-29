import React from 'react';
import AppRoutes from './AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
