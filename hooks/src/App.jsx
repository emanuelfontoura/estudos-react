import React from 'react'
import Estados from './Estados'
import UseState2 from './UseState2.jsx'
import UseEffect1 from './UseEffect1'
import UseRef1 from './UseRef1'
import UseRef2 from './UseRef2'
import UseMemo from './UseMemo'
import UseCallback from './UseCallback'
import UserContext from './UserContext'
import ProdutoContext from './ProdutoContext'
import {GlobalStorage} from './GlobalContext'
import useLocalStorage from './CustomHooks1'

function App() {
  const [product, setProduct] = useLocalStorage('produto', '')
  function handleClick({target}){
   setProduct(target.innerText) 
  }

  return <GlobalStorage>
    <div>
      <Estados />
      <UseState2 />
      <UseEffect1 />
      <UseRef1 />
      <UseRef2 />
      <UseMemo />
      <UseCallback />
      <ProdutoContext />
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </div>
  </GlobalStorage>
}

export default App