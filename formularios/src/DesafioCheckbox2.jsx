import React from 'react'

const DesafioCheckbox2 = () => {
  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza', 'azul']
  const [cores, setCores] = React.useState([])

  function handleChecked(cor, index){
    return cores.includes(cor+index)
  }

  function handleChangeCores({target}){
    if(target.checked){
      setCores([...cores, target.value])
    }else{
      setCores(cores.filter(cor => cor != target.value))
    }
  }

  return <>
    <h1>DESAFIO CHECKBOX 2</h1>
    <form>
      {coresArray.map((cor, index)=> {
        return <div key={index}>
          <label style={{textTransform: 'capitalize'}}>
            <input type="checkbox" 
            checked={handleChecked(cor, index)}
            onChange={handleChangeCores}
            value={cor+index}
            />
            {cor}
          </label>
        </div>
      })}
    </form>
  </>
}

export default DesafioCheckbox2