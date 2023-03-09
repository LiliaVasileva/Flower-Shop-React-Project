import React from "react";
import {Link} from "react-router-dom";

import salvia from "./images/salvia.png";


function Header() {
    return (
        <header id="header">
            <div className="logo">
                <div className="logo__info">
                    <Link to="/"><img alt="Salvia-png" className="logo__img" src={salvia}/></Link>
                    <h3>Цветарски магазин Салвия</h3>
                </div>
            </div>
        </header>
    )
}

export default Header;