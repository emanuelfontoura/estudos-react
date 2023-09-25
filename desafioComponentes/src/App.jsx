import React from 'react'
import Link from './Link'
import Title from './Title'
import Paragraph from './Paragraph.jsx'

function App() {
  const containerStyle = {
    padding: "15px"
  }

  return <>
    <header style={containerStyle}>
      <nav>
        <ul style={{padding: "0px", display: "flex", flexDirection: "column", gap:"10px"}}>
          <Link href="#" text="Home"/>
          <Link href="#" text="Produtos"/>
        </ul>
      </nav>
    </header>

    <section style={containerStyle}>
      <Title text="Home" color="green" />
      <Paragraph text="Esta é a home do site."/>
    </section>
  </>
}

export default App
