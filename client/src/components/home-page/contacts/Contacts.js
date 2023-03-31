
import styles from "./Contacts.module.css"
import workingHours from "../images/we_are_open.jpg";

function Contacts() {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.info}>
                <h2 className={styles.infoTitle}>Работно време</h2>
                <ul className={styles.infoItems}>
                    <li>
                        Понеделник - 8 - 17 ч.
                    </li>
                    <li >
                        Вторник - 8 - 17 ч.
                    </li>
                    <li >
                        Сряда - 8 - 17 ч.
                    </li>
                    <li >
                        Четвъртък - 8 - 17 ч.
                    </li>
                    <li >
                        Петък - 8 - 17 ч.
                    </li>
                    <li >
                        Събота - 8 - 17 ч.
                    </li>
                    <li >
                        Неделя - 8 - 13 ч.
                    </li>
                </ul>
            </div>
            <div className={styles.image}>
                <img src={workingHours} alt="Working hours sign"/>
            </div>
        </section>
    )
}

export default Contacts;