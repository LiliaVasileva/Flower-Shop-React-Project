import React from "react";
import salvia from './images/salvia.png'


// TODO!! links to shop services and to replace h4/h5 with ul and li tags

function Footer() {
    return (
        <footer id="footer">
            <section className="fo">
                <div className="info">
                    <div className="img-container">
                        <img alt="Salvia-png" className="logo" src={salvia}/>
                    </div>
                    <div className="services">
                        <h4>Магазин</h4>
                        <h5>Асортимент</h5>
                        <h5>Сватби</h5>
                        <h5>Погребения</h5>
                    </div>
                    <div className="contact">
                        <h4>Контакти</h4>
                        <h5>Тодор Влайков №41, Варна, България </h5>
                        <h5>+359886787033</h5>
                    </div>
                    <div className="about">
                        <h4>Flower Shop Salvia</h4>
                        <h5>Our Story</h5>
                        <h5>Important Ordering Information</h5>
                        <h5>Policies</h5>
                    </div>
                </div>
            </section>
            <section className="disclaimer">
                <h4 className="text"> ©2023 Цветарски магазин Салвия - All Rights Reserved</h4>
            </section>
        </footer>
    )

}

export default Footer;