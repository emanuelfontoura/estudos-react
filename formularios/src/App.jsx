import React from 'react'

function App() {
  const [msg, setMsg] = React.useState('')
  const [select, setSelect] = React.useState('')
  const [radio, setRadio] = React.useState('')

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
    {/* INPUT */}
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input type="text" name="nome" id="nome" value={form.nome} onChange={handleChange} />

      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" value={form.email} onChange={handleChange}/>

    {/* TEXTAREA */}
      <textarea name="msg" id="msg" cols="20" rows="10" value={msg} onChange={({target}) => setMsg(target.value)}></textarea>

    {/* SELECT */}
      <select name="select" id="select" value={select} onChange={({target}) => setSelect(target.value)}>
        
        <option disabled value="">Selecione</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
        <option value="notebook">Notebook</option>

      </select>

    {/* RADIO */}
      <label>
        <input type="radio" name="produto" id="notebook" value="notebook" onChange={({target}) => setRadio(target.value)} checked={radio === 'notebook'}/>
        Notebook
      </label>

      <label>
        <input type="radio" name="produto" id="tablet" value="tablet" onChange={({target}) => setRadio(target.value)} checked={radio === 'tablet'}/>
        Tablet
      </label>

      <button type="submit">ENVIAR</button>
    </form>
    <p>{form.nome}</p>
    <p>{form.email}</p>
  </>
}

export default App