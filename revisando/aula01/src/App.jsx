import React from 'react';
import Teste from './Teste';

function App() {
  const formFields = [
    {
      text: 'Masculino',
      type: 'radio',
      id: 'imasc',
      value: 'M',
      name: 'sexo',
    },
    {
      text: 'Feminino',
      type: 'radio',
      id: 'ifem',
      value: 'F',
      name: 'sexo',
    },
  ];

  const [sexo, setSexo] = React.useState(
    formFields.reduce((acc, field) => {
      return { ...acc, [field.name]: '' };
    }, {}),
  );

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Sexo selecionado: ${sexo.sexo}`);
  }

  function handleChange({ target }) {
    const { name, value } = target;
    setSexo({ ...sexo, [name]: value });
    console.log(sexo);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <h1>Sexo</h1>
          <div>
            {formFields.map((field) => {
              return (
                <>
                  <label htmlFor={field.id}>{field.text}</label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.name}
                    value={field.value}
                    checked={sexo[field.name] === field.value}
                    onChange={handleChange}
                  />
                </>
              );
            })}
          </div>
        </div>
        <button type="submit">ENVIAR</button>
      </form>
      <Teste k="sei la" />
    </>
  );
}

export default App;
