import React from 'react'
import Input from './Input'

function App() {
  const [cep, setCep] = React.useState('')
  const [error, setError] = React.useState(null)

  const validarCep = (value) => {
    if(value.length === 0){
      setError('Preencha um valor.')
      return false
    }else if(!/^\d{5}-?\d{3}$/.test(value)){
      setError('Preencha um CEP válido')
      return false
    }else{
      setError(null)
      return true
    }
  }

  const handleBlur = ({target}) => {
    validarCep(target.value)
  }

  const handleChange = ({target}) => {
    setCep(target.value)
    if (error) validarCep(target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(error){
      window.alert(error)
    }else{
      window.alert('ENVIADO!')
    }
  }

  return <>
    <form onSubmit={handleSubmit}>
      <Input id='cep' label='CEP' value={cep} onChange={handleChange} placeholder='00000-000' onBlur={handleBlur} />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  </>
}

export default App