import React from "react";
import { NavLink } from "react-router-dom";
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
    </>
}

export default Header