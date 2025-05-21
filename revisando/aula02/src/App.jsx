import React from 'react';
import Checkbox from './Checkbox';

const options = ['JavaScript', 'PHP', 'Python', 'Ruby'];

function App() {
  const [checkbox, setCheckbox] = React.useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(checkbox);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Checkbox options={options} value={checkbox} setValue={setCheckbox} />
        <button type="submit">ENVIAR</button>
      </form>
    </>
  );
}

export default App;
