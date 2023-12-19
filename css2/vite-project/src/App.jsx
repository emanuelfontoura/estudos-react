import React from 'react'
import Slide from './Components/Slide.jsx'

function App() {
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

  return <>
    <Slide slides={slides} />
  </>
}

export default App
