import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './shared/routes/AppRoutes';
import Header from './shared/components/Header.jsx';
import Footer from './shared/components/Footer.jsx';
import { ThemeProvider } from '@emotion/react';
import { LightTheme } from './shared/themes/Light.js';

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
