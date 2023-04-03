import salvia from "./images/logo-leaf.png"
import {React, useContext} from "react";
import {Link} from "react-router-dom";

import {AuthContext} from "../../context/authContext";
import styles from "./Navigation.module.css"

function Navigation() {

    const {isAuthenticated, email} = useContext(AuthContext)

    return (
        <section className={styles.nav}>
            <div>
                {isAuthenticated && (
                    <ul className={styles.navItemList}>
                        <li><Link className={styles.navItemLi} to="/catalog">Каталог</Link></li>
                        <li><Link className={styles.navItemLi} to="/flowers/create">Добави Асортимент</Link></li>
                        <li><Link className={styles.navItemLi} to="/contacts">Контакти</Link></li>
                        <li><Link className={styles.navItemLi} to="/logout">Изход</Link></li>
                    </ul>
                )}
                {!isAuthenticated && (
                    <ul className={styles.navItemList}>
                        <li><Link className={styles.navItemLi} to="/catalog">Каталог</Link></li>
                        <li><Link className={styles.navItemLi} to="/contacts">Контакти</Link></li>
                        <li><Link className={styles.navItemLi} to="/login">Вход</Link></li>
                        <li><Link className={styles.navItemLi} to="/register">Регистрация</Link></li>
                    </ul>
                )}
            </div>
            <div className={styles.logo}>
                {!isAuthenticated ?
                <h4>Начало</h4>
                : <h4>Здравей, {email}</h4>}

                <Link to="/"><img alt="Salvia-png" className={styles.logoImg} src={salvia}/></Link>
            </div>
        </section>
    )
}

export default Navigation;