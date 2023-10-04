import React from 'react'

const Exemplo = () => {
  const array = ['Emanuel', 'Gabriel']

  const [arrayNomes, setNome] = React.useState(array)

  function handleClick(){
    setNome((anterior) => [...anterior, 'Novo nome'])
  }

  return <div>
    {arrayNomes.map(nome => <ul><li>{nome}</li></ul>)}
    <button onClick={handleClick}>ADD</button>
  </div>
}

export default Exemplo