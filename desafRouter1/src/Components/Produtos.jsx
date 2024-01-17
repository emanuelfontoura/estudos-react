import React from "react";
import styles from './Produtos.module.css'
import Head from "./Head.jsx";

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

    if(produtos === null) return null
    return <>
        <Head title="Produtos" description="Página de produtos" />
        <div className={styles.produtos}>
            <h1>Produtos</h1>
        </div>
    </> 
}

export default Produtos