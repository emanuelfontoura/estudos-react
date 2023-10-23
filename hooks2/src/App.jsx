import React from 'react';
import useLocalStorage from './useLocalStorage.jsx';

const App = () => {
  const [product, setProduct] = useLocalStorage('item', 'mouse')
  const [item, setItem] = useLocalStorage('galinha', 'caipira')

  return <div>
    {product}
    <p></p>
    <button onClick={(event) => setProduct(event.target.innerText)}>notebook</button>
    <button onClick={(event) => setProduct(event.target.innerText)} >smartphone</button>
    <p>{item}</p>
  </div>
}

export default App