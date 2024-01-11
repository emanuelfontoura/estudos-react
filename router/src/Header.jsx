import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation()

    React.useEffect(() => {
        console.log('MUDOU DE PÁGINA!', location)
    }, [location])

    return <div>
        <p>HEADER</p>
    </div>
}

export default Header