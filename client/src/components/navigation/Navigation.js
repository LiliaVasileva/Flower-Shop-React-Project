import salvia from './images/salvia.png'
import {React, useContext} from "react";
import {Link} from "react-router-dom";

import {AuthContext} from "../../context/authContext";

function Navigation() {

    const {isAuthenticated, email} = useContext(AuthContext)

    return (
        <section id="nav">
            <div className="nav__item">
                {isAuthenticated && (
                    <ul className="nav__item__ul">
                        <li><Link className="nav__item__li" to="/catalog">Каталог</Link></li>
                        <li><Link className="nav__item__li" to="/flowers/create">Добави Асортимент</Link></li>
                        <li><Link className="nav__item__li" to="/contacts">Контакти</Link></li>
                        <li><Link className="nav__item__li" to="/logout">Изход</Link></li>
                    </ul>
                )}
                {!isAuthenticated && (
                    <ul className="nav__item__ul">
                        <li><Link className="nav__item__li" to="/catalog">Каталог</Link></li>
                        <li><Link className="nav__item__li" to="/contacts">Контакти</Link></li>
                        <li><Link className="nav__item__li" to="/login">Вход</Link></li>
                        <li><Link className="nav__item__li" to="/register">Регистрация</Link></li>
                    </ul>
                )}
            </div>
            <div className="logo">
                {!isAuthenticated ?
                <h4>Салвия</h4>
                : <h4>Здравей, {email}</h4>}

                <Link to="/"><img alt="Salvia-png" className="logo__img" src={salvia}/></Link>
            </div>
        </section>
    )
}

export default Navigation;