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

function App() {
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
    </div>
  </GlobalStorage>
}

export default App