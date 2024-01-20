import React from "react";
import { Link } from "react-router-dom";
import styles from './Produtos.module.css'

const Produtos = () => {
    const [produtos, setProdutos] = React.useState(null)
    const [erro, setErro] = React.useState(null)
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        const fetchData = async (url) => {
            try{
                setLoading(true)
                const data = await fetch(url)
                const json = await data.json()
                setProdutos(json)
            }catch (erro){
                setErro(erro)
            }finally{
                setLoading(false)
            }
        }
        fetchData('https://ranekapi.origamid.dev/json/api/produto')
    }, [])

    if (erro) return <p>{erro}</p>
    if (loading) return <h1>Carregando...</h1>
    if (produtos === null) return null
    return <>
        <h1>Produtos</h1>
        <div className={styles.container}>
            {produtos.map((produto) => {
                return <Link to={`produtos/${produto.id}`}>
                    <h1>{produto.nome}</h1>
                    <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
                </Link>
            })}
        </div>
    </>
}

export default Produtos