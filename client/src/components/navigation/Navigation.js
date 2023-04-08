import salvia from "./images/logo-leaf.png"
import {React, useContext} from "react";
import {Link} from "react-router-dom";

import {AuthContext} from "../../context/authContext";
import styles from "./Navigation.module.css"
import {useUserContext} from "../../context/userContext";
import ErrorPage from "../error-page/ErrorPage";

function Navigation() {

    const {isAuthenticated, userId, userError} = useContext(AuthContext)
    const {user} = useUserContext()


    


    if(userError){
        return (<ErrorPage message={userError}/>)
    }

    return (
        <section className={styles.nav}>
            <div>
                {isAuthenticated && (
                    <ul className={styles.navItemList}>
                        <li><Link className={styles.navItemLi} to="/catalog">Каталог</Link></li>
                        <li><Link className={styles.navItemLi} to="/flowers/create">Добави Асортимент</Link></li>
                        <li><Link className={styles.navItemLi} to={`/profile/${userId}`}>Профил</Link></li>
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
                : <h4>Здравей, {user.firstName}</h4>}

                <Link to="/"><img alt="Salvia-png" className={styles.logoImg} src={salvia}/></Link>
            </div>
        </section>
    )
}

export default Navigation;