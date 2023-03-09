import salvia from './images/salvia.png'
import React from "react";
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <section id="nav">
            <div className="nav__item">
                <ul className="nav__item__ul">
                    <li><Link className="nav__item__li" to="/login">Вход</Link></li>
                    <li><Link className="nav__item__li" to="/register">Регистрация</Link></li>
                    <li><Link className="nav__item__li" to="/catalog">Каталог</Link></li>
                    <li><Link className="nav__item__li" to="/contacts">Контакти</Link></li>
                </ul>
            </div>
            <div className="logo">
                <h4>Салвия</h4>
                <Link to="/"><img alt="Salvia-png" className="logo__img" src={salvia}/></Link>
            </div>
        </section>
    )
}

export default Navigation;