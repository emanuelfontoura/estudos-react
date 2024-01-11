import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return <>
        <h1>Home</h1>
        <p>SEJA BEM-VINDO</p>
        <nav style={{display: 'flex', gap: '15px'}}>
            <Link to='produto/notebook' >Notebook</Link>
            <Link to='produto/celular' >Celular</Link>
        </nav>
    </>
}

export default Home