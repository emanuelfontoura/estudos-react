import React from "react";
import { useLocation, useParams, NavLink, Routes, Route } from "react-router-dom";
import ProdutoDescricao from './ProdutoDescricao.jsx'
import ProdutoAvaliacao from './ProdutoAvaliacao.jsx'
import ProdutoCustomizar from './ProdutoCustomizar.jsx'

const Produto = () => {
    const params = useParams()
    const location = useLocation()
    const search = new URLSearchParams(location.search)
    console.log(search.get('q'))

    return <div>
        <h1>Produto : {params.id}</h1>
        <nav>
            <NavLink to='' end>Descrição</NavLink>
            <NavLink to='avaliacao' >Avaliação</NavLink>
            <NavLink to='customizar' >Customizar</NavLink>
        </nav>
        <Routes>
            <Route path="/" element={<ProdutoDescricao />} />
            <Route path="avaliacao" element={<ProdutoAvaliacao />} />
            <Route path="customizar" element={<ProdutoCustomizar />} />
        </Routes>
    </div>
}

export default Produto