import mainPicture from "../images/main_picture.jpg";
import React from "react";

function Main() {
    return (
        <header id="main" className="section">
            <img src={mainPicture} alt="" className="main-img"/>
            <section className="info">
                <h1 className="info__title">Цветарски магазин с традиции</h1>
                <h2 className="info__desc">Повече от 40 годишен опит в аранжирането и озеляването.</h2>
            </section>
        </header>
    )
}

export default Main;