import ladies from "./slider-img-1.jpg"

function History() {
    return (
        <section id="history" className="section">
            <div className="image"><img src={ladies} alt=""/></div>
            <div className="info">
                <h2 className="info__title">История</h2>
                <p className="info__desc">Богат избор от цветни традиции</p>
                <ul className="info__items" role="list">
                    <li className="info__items__li ">
                        Магазина е основан през 1992 година, от Славка Димитрова.
                        Славка е експерт в озеляването, аранжирането и поддържането на цветя.
                        Печелила е 6 конкурса за аранжиране на венци, букети и жарданиери.
                    </li>
                    <li className="info__items__li ">
                        Магазина е основан през 1992 година, от Славка Димитрова.
                        Славка е експерт в озеляването, аранжирането и поддържането на цветя.
                        Печелила е 6 конкурса за аранжиране на венци, букети и жарданиери.
                    </li>
                    <li className="info__items__li ">
                        Магазина е основан през 1992 година, от Славка Димитрова.
                        Славка е експерт в озеляването, аранжирането и поддържането на цветя.
                        Печелила е 6 конкурса за аранжиране на венци, букети и жарданиери.
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default History;