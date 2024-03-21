import React from 'react'
import {GlobalContext} from './GlobalContext'

const ProdutoContext = ({cor, ...restante}) => {
  const dados = React.useContext(GlobalContext)
  return <>
    {dados.nome}
  </>
}

export default ProdutoContext