import React from 'react'
import {GlobalContext} from './GlobalContext.jsx'

const Produtos = () => {
  const globalObject = React.useContext(GlobalContext)
  if(globalObject.data === null){
    return null
  }else{
    return <div>
      {globalObject.data.map(produto => <li key={produto.id}>{produto.nome}</li>)}
    </div>
  }
}

export default Produtos