import React from 'react'
import Produto from './Produto'

const UseEffect1 = () => {
  const [contador, setContador] = React.useState(1)
  const [dados, setDados] = React.useState(null)
  const [ativo, setAtivo] = React.useState(false)

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
    .then(response => response.json())
    .then(json => setDados(json))
  }, [])

  React.useEffect(() => {
    return
  }, [ativo])

  return <div style={{marginTop: '20px'}}>
    {dados && <div>
        <h1>{dados.nome}</h1>
        <p>{dados.preco * contador}</p>
      </div>}
    <button onClick={() => setContador(contador+1)}>{contador}</button>
    {ativo && <Produto />}
    <button style={{marginTop: '20px', display:'block'}} onClick={() => setAtivo(!ativo)}>{ativo?'ATIVO':'INATIVO'}</button>
  </div>
}

export default UseEffect1