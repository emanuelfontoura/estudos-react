import React from 'react';

const App = () => {
  const formFields = [
    {
      type: 'text',
      label: 'Nome',
      id: 'nome',
    },
    {
      type: 'password',
      label: 'Senha',
      id: 'senha',
    },
  ];

  const [form, setForm] = React.useState(
    formFields.reduce((acc, field) => {
      return { ...acc, [field.id]: '' };
    }, {}),
  );

  const [msg, setMsg] = React.useState('');
  const [select, setSelect] = React.useState('');
  const [sexo, setSexo] = React.useState('');

  function handleChange(event) {
    console.log(form);
    const { id, value } = event.target;
    setForm({ ...form, [id]: value });
    console.log(form);
  }

  function handleSubmit(event) {
    event.preventDefault();
    window.alert('ENVIADO!');
  }

  function handleChangeSexo(event) {
    setSexo(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {formFields.map(({ type, label, id }) => {
          return (
            <div key={id}>
              <label htmlFor={id}>{label}</label>
              <input
                type={type}
                id={id}
                value={form[id]}
                onChange={handleChange}
              />
            </div>
          );
        })}

        <div>
          <label htmlFor="msg">Mensagem</label>
          <textarea
            name="msg"
            id="msg"
            cols="20"
            rows="5"
            value={msg}
            onChange={({ target }) => setMsg(target.value)}
          />
        </div>

        <div>
          <select
            name="opcoes"
            id="opcoes"
            value={select}
            onChange={({ target }) => setSelect(target.value)}
          >
            <option value="">Selecione uma opção</option>
            <option value="notebook">Notebook</option>
            <option value="tablet">Tablet</option>
            <option value="smartphone">Smartphone</option>
          </select>
        </div>

        <div>
          <h1>Sexo</h1>
          <label htmlFor="imasc">Masculino</label>
          <input
            type="radio"
            name="sexo"
            id="imasc"
            value="M"
            onChange={handleChangeSexo}
          />
          <label htmlFor="ifem">Feminino</label>
          <input
            type="radio"
            name="sexo"
            id="ifem"
            value="F"
            onChange={handleChangeSexo}
          />
        </div>

        <button type="submit">ENVIAR</button>
      </form>
      <p>Nome digitado: {form.nome}</p>
      <p>Senha digitado: {form.senha}</p>
      <p>Mensagem digitada: {msg}</p>
      <p>Opção de produto selecionada: {select}</p>
      <p>Sexo selecionado: {sexo}</p>
    </>
  );
};

export default App;
