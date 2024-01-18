import React from "react";
import styles from './Produtos.module.css'
import Head from "./Head.jsx";
import {Link} from 'react-router-dom'

const Produtos = () => {
    const [produtos, setProdutos] = React.useState(null)

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('https://ranekapi.origamid.dev/json/api/produto')
            const json = await data.json()
            setProdutos(json)
        }
        fetchData().catch(console.error)
    }, [])

    console.log(produtos)

    if(produtos === null) return null
    return <>
        <Head title="Ranek | Produtos" description="Página de produtos" />
        <section className={styles.produtos}>
            {produtos.map(produto => {
                return <Link to={`produto/${produto.id}`} key={produto.id}>
                    <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
                    <h1>{produto.nome}</h1>
                </Link>
            })}
        </section>
    </> 
}

export default Produtos