import React from "react";
import { useParams } from "react-router-dom";
import styles from './Produto.module.css'
import Head from './Head.jsx'

const Produto = () => {
    const params = useParams()
    const [produto, setProduto] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        const fetchData = async () => {
            try{
                setLoading(true)
                const data = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
                const json = await data.json()
                setProduto(json)
            }catch (erro) {
                setError('Um erro ocorreu!')
            }finally{
                setLoading(false)
            }
        }
        fetchData().catch(console.error)
    }, [params.id])

    if(loading) return <h1>Carregando...</h1>
    if(error) return <p>{error}</p>
    if(produto === null) return null
    return <>
        <section>
            <Head title={`Ranek | ${produto.nome}`} description={`Ranek | Esse é o produto: ${produto.nome}`} />
            <div>
                <h1>{produto.nome}</h1>
                {produto.fotos.map(foto => {
                    return <img key={foto.src} src={foto.src} alt={foto.titulo}/>
                })}
                <span className={styles.preco}>R$ {produto.preco}</span>
                <p className={styles.descricao}>{produto.descricao}</p>
            </div>
        </section>
    </>
}

export default Produto