import React from 'react'

function operacaoLenta(){
  let c
  for(let i = 0; i < 100000000; i++){
    c = (i+1) / 10
  }
  return c
}

const UseMemo = () => {
  const [contar, setContar] = React.useState(0)
  const valor = React.useMemo(() => {
    const localItem = window.localStorage.getItem('produto')
    console.log('Aconteceu o Memo')
    return localItem
  }, [])
  
  const valor2 = React.useMemo(() => operacaoLenta(), [])
  const t1 = performance.now()

  return <div>
    {console.log(t1)}
    <p>{valor}</p>
    <p>{valor2}</p>
    <p>{contar}</p>
    <button onClick={() => setContar(contar+1)}>CONTAR + 1</button>
  </div>
}

export default UseMemo