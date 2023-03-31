import React from "react";
import {Link} from "react-router-dom";

import salvia from './images/salvia.png'
import styles from "./Footer.module.css"


function Footer() {
    return (
        <footer className={styles.footer}>
            <section className="fo">
                <div className={styles.footerInfo}>
                    <div className={styles.imgContainer}>
                        <img alt="Salvia-png" className={styles.logoImg} src={salvia}/>
                    </div>
                    <div className="about">
                        <ul>
                            <li className={styles.titleList}>Цветарски магазин Салвия</li>
                            <li>Нашата история</li>
                            <li>Информация за поръчки</li>
                            <li>Общи Условия</li>
                            <li>Политика на поверителност</li>
                        </ul>
                    </div>
                    <div className="services">
                        <ul>
                            <li className={styles.titleList}>Магазин</li>
                            <li><Link to="/catalog" style={{ textDecoration: 'none', color: 'black' }}>Асортимент</Link></li>
                            <li><Link to="/catalog" style={{ textDecoration: 'none', color: 'black' }}>Сватби</Link></li>
                            <li><Link to="/catalog" style={{ textDecoration: 'none', color: 'black' }}>Погребения</Link></li>
                        </ul>
                    </div>
                    <div className="contact">
                        <ul>
                            <li className={styles.titleList}>Контакти</li>
                            <li>Тодор Влайков №41, Варна, България</li>
                            <li>+359886787033</li>
                        </ul>

                    </div>
                </div>
            </section>
            <section className={styles.footerDisclaimer}>
                <h4 className={styles.text}> ©2023 Цветарски магазин Салвия - All Rights Reserved</h4>
            </section>
        </footer>
    )

}

export default Footer;