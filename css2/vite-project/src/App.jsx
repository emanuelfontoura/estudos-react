import React from 'react';
import Slide from './Components/Slide.jsx';
import Foto from './img/foto.jpg?react';
import Dog from './Components/Dog.jsx';

function App() {
  const [olho, setOlho] = React.useState(0)

  const slides = [
    {
      id: 'slide1',
      text: 'Slide 1'
    },
    {
      id: 'slide2',
      text: 'Slide 2'
    },
    {
      id: 'slide3',
      text: 'Slide 3'
    },
    {
      id: 'slide4',
      text: 'Slide 4'
    }
  ]

  const mostrarOlho = () => {
    for(let i = 0; i < 6; i++){
      setTimeout(() => {
        setOlho(i)
      }, 100 * i)
    }
  }

  return <>
    <Slide slides={slides} />
    <button onClick={mostrarOlho}>Mostrar olho</button>
    <Dog color="red" olho={olho}/>
    <img src={Foto} alt="Foto" />
  </>
}

export default App
