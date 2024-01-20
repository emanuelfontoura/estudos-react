import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return <>
        <nav>
            <ul>
                <li>
                    <NavLink to='/' end>Produtos</NavLink>
                </li>
                <li>
                    <NavLink to='contato'>Contato</NavLink>
                </li>
            </ul>
        </nav>
    </>
}

export default Header