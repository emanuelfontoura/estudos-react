import React from 'react'

function App() {
  const formFields = [
    {
      id:'nome',
      label:'Nome',
      type:'text'
    },
    {
      id:'email',
      label:'Email',
      type:'email'
    },
    {
      id:'senha',
      label:'Senha',
      type:'password'
    },
    {
      id:'cep',
      label:'Cep',
      type:'text'
    },
    {
      id:'rua',
      label:'Rua',
      type:'text'
    },
    {
      id:'numero',
      label:'Número',
      type:'text'
    },
    {
      id:'bairro',
      label:'Bairro',
      type:'text'
    },
    {
      id:'cidade',
      label:'Cidade',
      type:'text'
    },
    {
      id:'estado',
      label:'Estado',
      type:'text'
    },
  ]

  const [form, setForm] = React.useState(formFields.reduce((acc, field)=> {
    return {...acc, [field.id]:''}
  }, {}))

  const [response, setResponse] = React.useState(null)

  function handleChange(event){
    const {id, value} = event.target
    setForm({...form, [id]:value})
    console.log(form)
  }

  function handleSubmit(event){
    event.preventDefault()
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body:JSON.stringify(form)
    }).then(response => setResponse(response))
  }

  return <div>
    <form onSubmit={handleSubmit}>
      {formFields.map(({id, label, type}) => {
        return <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} value={form[id]} onChange={handleChange}/>
        </div>
      })}
      <button type="submit">ENVIAR</button>
    </form>
    {response && response.ok && <p>Formulário enviado com sucesso!</p>}
  </div>
}

export default App