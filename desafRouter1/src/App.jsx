import React from 'react'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import Header from './Components/Header.jsx'

function App() {

  return <>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  </>
}

export default App
