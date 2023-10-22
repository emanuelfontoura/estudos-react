import React from "react";

const useFetch = () => {
  const [data, setData] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  async function request(url, options){
    try{
      setLoading(true)
      const response = await fetch(url, options)
      const json = await response.json()
      setData(json)
    }catch (err){
      setError('Erro')
    }finally{
      setLoading(false)
    }
  }

  return {data, error, loading, request}
}

export default useFetch