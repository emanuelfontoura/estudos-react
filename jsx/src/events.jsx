import React from 'react';

const buttonStyle = {
  padding: '10px',
  backgroundColor: 'red',
  color: 'blue',
  fontSize: '1.3rem'
}

// FUNÇÃO FORA DO EVENTO
function handleClick(event){
  console.log(event)
}

const Button2 = () => {
  return <button style={buttonStyle} onClick={handleClick}>CLIQUE AQUI</button>
}

// FUNÇÃO DECLARADA INLINE DO ELEMENTO
const Button = () => {
  return <button style={buttonStyle} onClick={({target}) => target.classList.toggle('ativa')}>CLIQUE AQUI</button>
}

const App = () => {
  function handleScroll(event){
    console.log(event)
  }
  window.addEventListener('scroll', handleScroll)
  return <>
    <Button />
    <Button2 />
  </>
}

export default App;