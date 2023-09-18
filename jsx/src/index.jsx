import React from 'react'
import ReactDOM from 'react-dom/client'
import App1 from './App.jsx'
import Exercise1 from './exercise1.jsx'
import JSXArrays from './jsxArrays.jsx'
import Exercise2 from './exercise2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App1 />
    <Exercise1 />
    <JSXArrays />
    <Exercise2 />
  </React.StrictMode>,
)
