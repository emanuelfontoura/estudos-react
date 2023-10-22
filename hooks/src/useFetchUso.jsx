import React from 'react'
import useFetch from './CustomHooks2'

const useFetchUso = () => {
  const {data, error, loading, request} = useFetch()
  React.useEffect(() => {
    request('https://ranekapi.origamid.dev/json/api/produto/')
  }, [request])

  if(loading) return <p>Carregando...</p>
  if(error) return <p>{error}</p>
  if(data) return <>
    <p>useFetch</p>
    <div>
      {data.map(product => {
        return <li key={product.nome}>{product.nome}</li>
      })}
    </div>
  </>
  else return null
}

export default useFetchUso