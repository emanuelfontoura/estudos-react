import React from 'react'

const UseCallback = () => {
  const [contar, setContar] = React.useState(0)

  const handleClick = React.useCallback(() => {
    setContar(contar => contar+1)
  }, [])

  return <div>
     <p>useCallback</p>
     <p>{contar}</p>
     <button onClick={handleClick}>CONTAR+1</button>
  </div>
}

export default UseCallback