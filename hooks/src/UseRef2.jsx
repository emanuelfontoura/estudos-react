import React from 'react'

const UseRef2 = () => {
  const [carrinho, setCarrinho] = React.useState(0)
  const [notificacao, setNotificacao] = React.useState(null)
  const timeOutRef = React.useRef()

  function handleClick(){
    setCarrinho(carrinho + 1)
    setNotificacao('Item adicionado ao carrinho.')
    clearTimeout(timeOutRef.current)
    timeOutRef.current = setTimeout(()=> {
      setNotificacao(null)
    }, 2000)
  }

  return <div>
    <p>{carrinho}</p>
    <p>{notificacao}</p>
    <button style={{marginTop:'15px'}} onClick={handleClick}>Adicionar ao Carrinho</button>
  </div>
}

export default UseRef2