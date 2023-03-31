import React from "react";
import {Link} from "react-router-dom";

import styles from "./Header.module.css"
import salvia from "./images/salvia.png"


function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerLogo}>
                <div className={styles.logoInfo}>
                    <Link to="/"><img alt="Salvia-png" className={styles.logoImg} src={salvia}/></Link>
                    {/*<h3 className={styles.headerTitle}>Цветарски магазин Салвия</h3>*/}
                </div>
            </div>
        </header>
    )
}

export default Header;