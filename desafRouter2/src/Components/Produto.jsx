import React from "react";
import { useParams } from "react-router-dom";
import styles from './Produto.module.css'

const Produto = () => {
    const [produto, setProduto] = React.useState(null)
    const [erro, setErro] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const params = useParams()

    React.useState(() => {
        const fetchData = async (url) => {
            try{
                setLoading(true)
                const data = await fetch(url)
                const json = await data.json()
                setProduto(json)
            }catch (erro){
                setErro(erro)
            }finally{
                setLoading(false)
            }
        }
        fetchData(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
    }, [])

    console.log(params)
    console.log(produto)

    if (erro) return <p>Houve um erro: {erro}</p>
    if (loading) return <h1>Carregando...</h1>
    if (produto === null) return null
    return <>
        <div className={styles.container}>
            <div>
                {produto.fotos.map(foto => {
                    return <img src={foto.src} alt={foto.titulo} />
                })}
            </div>
            <div>
                <h1>{produto.nome}</h1>
                <p>{produto.descricao}</p>
                <span>R$ {produto.preco},00</span>
            </div>
        </div>
    </>
}

export default Produto