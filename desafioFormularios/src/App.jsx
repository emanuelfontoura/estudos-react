import React from 'react'
import Radio from './Radio';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

function App() {
  const [slide, setSlide] = React.useState(0)
  const [respostas, setRespostas] = React.useState({
    p1:'',
    p2:'',
    p3:'',
    p4:''
  })
  const [resultado, setResultado] = React.useState('')

  function handleChange({target}){
    setRespostas({...respostas, [target.id]:target.value})
  }

  function resultadoFinal(){
    const corretas = perguntas.filter(pergunta => respostas[pergunta.id] === pergunta.resposta)
    setResultado(`Você acertou ${corretas.length} de ${perguntas.length}`)
  }

  function handleClick(){
    if(slide < perguntas.length -1){
      setSlide(slide + 1)
    }else{
      setSlide(slide + 1)
      resultadoFinal()
    }
  }

  return <>
    {perguntas.map((pergunta, index) => {
      return <Radio 
        active={slide === index}
        options={pergunta.options}
        pergunta={pergunta.pergunta}
        id={pergunta.id}
        value={respostas[pergunta.id]}
        onChange={handleChange}
      />
    })}
    {
      resultado ? (<p>{resultado}</p>) : (<button onClick={handleClick}>Próxima</button>)
    }
  </>
}

export default App
