import React from 'react'

const Produto = () => {

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    function handleScroll(event){
      console.log(event)
    }
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return <div>
    <p style={{height: '200vh'}}>Meu produto</p>
  </div>
}

export default Produto