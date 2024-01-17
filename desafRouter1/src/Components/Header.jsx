import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Produtos from "./Produtos.jsx";
import Contato from "./Contato.jsx";
import styles from './Header.module.css';

const Header = () => {
    return <>
        <nav>
            <ul className={styles.container}>
                <li className={styles.items}>
                    <NavLink to="/" end>Produtos</NavLink>
                </li>
                <li className={styles.items}>
                    <NavLink to="contato" >Contato</NavLink>
                </li>
            </ul>
        </nav>

        <Routes>
            <Route path="/" element={<Produtos />}/>
            <Route path="contato" element={<Contato />}/>
        </Routes>
    </>
}

export default Header