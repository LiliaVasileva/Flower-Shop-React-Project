import mainPicture from "../images/main-photo.png"
import React from "react";

function Main() {
    return (
        <header id="main" className="section">
            <img src={mainPicture} alt="" className="main-img"/>
            <section className="info">
                <h1 className="info__title">Цветарски магазин с традиции</h1>
                <h2 className="info__desc">Повече от 40 годишен опит <p>в аранжирането и озеляването.</p></h2>
            </section>
        </header>
    )
}

export default Main;