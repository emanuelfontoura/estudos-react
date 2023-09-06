import React from 'react';

const Input = () => {
  return <div>
    <label htmlFor="write">Escreva: </label>
    <input type="text" id='write'/>
  </div>
}

const Button = () => {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <>
    <Input />
    <button className='marginTop' onClick={handleClick}>Clique =&gt; {count}</button>
  </>
}

const App = () => {
  return <div>
    <Button />
  </div>;
}

export default App;