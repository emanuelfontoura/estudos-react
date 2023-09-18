import React from "react";

const tituloSection = <h1>JSX ARRAYS</h1>

const products = ['Banana', 'Maçã', 'Uva', 'Goiaba', 'Kiwi']

const livros = [
  {id: 0o1, nome: 'A laranja', ano: 1998},
  {id: 0o2, nome: 'A goiaba', ano: 1999},
  {id: 0o3, nome: 'A maçã', ano: 1995}
]

const App = () => {
  return <>
    <div style={{marginTop: '30px'}}>{tituloSection}</div>

    <ul>
      {products.map(fruta => <li key={fruta}>{fruta}</li>)}
    </ul>

    <ul>
      {livros.filter(livro => livro.ano >= 1998).map(livro => {
        return <li key={livro.id}>{livro.nome} - {livro.ano}</li>
      })}
    </ul>
  </>
}

export default App