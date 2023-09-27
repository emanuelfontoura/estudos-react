import React from 'react'
import Link from './Link'

const Header = () => {
  return <header style={{padding: '15px'}}>
    <nav>
      <ul style={{padding: "0px", display: "flex", flexDirection: "column", gap:"10px"}}>
        <Link href="home" text="Home"/>
        <Link href="produtos" text="Produtos"/>
      </ul>
    </nav>
  </header>
}

export default Header