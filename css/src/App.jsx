import React from 'react'
import Produto from './Components/Produto.jsx'
import styled from 'styled-components' /* STYLED COMPONENTS */
import Card from 'react-bootstrap/Card' /* REACT BOOTSTRAP */

const Titulo = styled.h1`
    font-size: 1,5rem;
    color: blue;
    letter-spacing: 0.5rem;
`

const Paragrafo = styled.p`
  font-size: 0.8rem;
  color: green;
  letter-spacing: 0.2rem;
`

const CorVariavel = styled.p`
  background-color: ${({ativo, cor}) => ativo ? cor : "blue"};
  font-size: ${({tamanhoFonte}) => tamanhoFonte};
  color: ${({corLetra}) => corLetra};
  padding: ${({padding}) => padding};
  margin: ${({margin}) => margin};
  &:hover{
    font-size: 2rem;
  }
`

function template(value, total, seila){
  console.log(value)
  console.log(total)
  console.log(seila)
}

const total = 10
const seila = 200
template`São ${total} no total ${seila}`

function App() {

  const [ativo, setAtivo] = React.useState(false)

  return <>
    <Titulo>Produto 1</Titulo> 
    <Paragrafo>Este produto é um dispostivo</Paragrafo>
    <CorVariavel ativo={ativo} onClick={() => setAtivo(!ativo)} cor="red" tamanhoFonte="1.5rem" corLetra="white" padding="1rem" margin="15px" >COR VARIÁVEL</CorVariavel>
    <Produto />

    <div className='card bg-dark text-white m-5'> {/* BOOTSTRAP */}
      <div className='card-header'>Notebook</div>
      <div className='card-body'>
        <h5 className='card-title'></h5>
      </div>
    </div>

    <div> {/* REACT BOOTSTRAP */}
      <Card bg='dark' text='white' className='m-5' style={{ maxWidth: '18rem' }}>
        <Card.Header>Notebook</Card.Header>
        <Card.Body>
          <Card.Title>R$ 2500</Card.Title>
          <Card.Text>Produto inovador!</Card.Text>
        </Card.Body>
      </Card>
    </div>
  </>
}

export default App
