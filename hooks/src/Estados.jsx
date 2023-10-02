import React from 'react'
import ButtonModal from './ButtonModal'
import Modal from './Modal.jsx'

const Estados = () => {
  const [estado, setEstado] = React.useState(true)

  const [dados, setDados] = React.useState({nome: 'Emanuel', idade: 19})

  const [modal, setModal] = React.useState(false)

  function handleClick(){
    setEstado(!estado)
    setDados({...dados, faculdade: 'Faculdade incompleta'})
  }

  return <div>
    <button onClick={handleClick}>{estado?'ATIVO':'INATIVO'}</button>

    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
    </div>

    <div>
      <div>{modal?'MODAL É TRUE':'MODAL É FALSE'}</div>
      <Modal modal={modal} setModal={setModal}/>
      <ButtonModal modal={modal} setModal={setModal} />
    </div>
  </div>
}

export default Estados