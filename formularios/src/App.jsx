import React from 'react'

function App() {
  const [form, setForm] = React.useState({
    nome:'',
    email: ''
  })

  function handleChange(event){
    const {id, value} = event.target
    setForm({...form, [id]:value})
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(form.nome)
  }

  return <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input type="text" name="nome" id="nome" value={form.nome} onChange={handleChange} />

      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" value={form.email} onChange={handleChange}/>

      <button type="submit">ENVIAR</button>
    </form>
    <p>{form.nome}</p>
    <p>{form.email}</p>
  </>
}

export default App