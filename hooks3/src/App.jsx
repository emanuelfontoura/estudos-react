import React from 'react'
import useFetch from './useFetch'

function App() {
  const {data, error, loading, request} = useFetch()

  React.useEffect(() => {
    async function fetchData(){
      const {response, json} = await request('https://ranekapi.origamid.dev/json/api/produto/')
    }
    fetchData()
  }, [request])

  if(error) return <p>{error}</p>
  if(loading) return <p>Carregando...</p>
  if(data){
    return <div>
      <ul>
        {data.map(produto => <li key={produto.nome}>{produto.nome}</li>)}
      </ul>
    </div>
  }else{
    return null
  }
}

export default App
