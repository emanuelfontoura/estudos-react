import React from 'react'
import useForm from './useForm.jsx'
import Input from './Input.jsx'

function App() {
  const cep = useForm('cep')

  const handleSubmit = (event) => {
    event.preventDefault()
    if(true){
      window.alert(error)
    }else{
      window.alert('ENVIADO!')
    }
  }

  return <>
    <form onSubmit={handleSubmit}>
      <Input id='cep' type="text" label='CEP' placeholder='00000-000' {...cep} />
      <button>Enviar</button>
    </form>
  </>
}

export default App
