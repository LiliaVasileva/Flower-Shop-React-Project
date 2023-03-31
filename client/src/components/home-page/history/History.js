import styles from "./History.module.css"
import ladies from "../images/slider-img-1.jpg"

function History() {
    return (
        <section className={styles.history}>
            <div className={styles.image}><img src={ladies} alt=""/></div>
            <div className={styles.info}>
                <h2 className={styles.infoTitle}>История</h2>
                <p className={styles.infoDescription}>Богат избор от цветни традиции</p>
                <ul className={styles.infoItems}>
                    <li className={styles.infoItemsList}>
                        Магазина е основан през 1992 година, от Славка Димитрова.
                        Славка е експерт в озеляването, аранжирането и поддържането на цветя.
                        Печелила е 6 конкурса за аранжиране на венци, букети и жарданиери.
                    </li>
                    <li className={styles.infoItemsList}>
                        Магазина е основан през 1992 година, от Славка Димитрова.
                        Славка е експерт в озеляването, аранжирането и поддържането на цветя.
                        Печелила е 6 конкурса за аранжиране на венци, букети и жарданиери.
                    </li>
                    <li className={styles.infoItemsList}>
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