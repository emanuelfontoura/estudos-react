import React from 'react'

const UseRef1 = () => {
  const [comentario, setComentarios] = React.useState([])
  const [input, setInput] = React.useState('')
  const inputRef = React.useRef()

  function handleClick(){
    if(input !== ''){
      setComentarios([...comentario, input])
      setInput('')
      inputRef.current.focus()
    }
  }

  function handleKeyDown(event){
    if(event.key === 'Enter'){
      handleClick()
    }
  }

  return <div>
    <ul>
      {comentario.map(coment => <li key={coment}>{coment}</li>)}
    </ul>
    <input onKeyDown={handleKeyDown} ref={inputRef} type="text" value={input} onChange={(event) => setInput(event.target.value)}/>
    <button onClick={handleClick}>Enviar</button>
  </div>
}

export default UseRef1