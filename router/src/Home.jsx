import React from "react";
import { Link } from "react-router-dom";
import Head from "./Head.jsx";
import {Helmet} from 'react-helmet'

const Home = () => {
    return <>
        {/* <Head title="Home" description="Essa é a descrição da home" />  */}
        <Helmet>
            <title>Dogs | Home</title>
            <meta name="description" content="Página Home" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
        </Helmet>
        <h1>Home</h1>
        <p>SEJA BEM-VINDO</p>
        <nav style={{display: 'flex', gap: '15px'}}>
            <Link to='produto/notebook' >Notebook</Link>
            <Link to='produto/celular' >Celular</Link>
        </nav>
    </>
}

export default Home