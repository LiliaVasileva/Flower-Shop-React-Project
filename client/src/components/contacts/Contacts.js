import {Link} from "react-router-dom";

import styles from "./Contacts.module.css"
import shop from "./images/The-Flower-Shop-Bruton-Jo.jpg"

function Contacts() {
    return (
        <section id="contacts" className={styles.contacts}>
            <div className={styles.contactInfo}>
                <div className={styles.textContactInfo}>
                    <h2>Заповядайте, да ни посетите!</h2>
                    <p> Магазина се намира на ул. Тодор Влайков, точно срещу СОУ "Елин Пелин". </p>
                    <ul className={styles.addressInfo}>
                        <li>
                            <span>Адрес:</span> Тодор Влайков №41 гр.Варна България
                        </li>
                        <li>
                            <span>Телефон:</span> 052/ 60 20 49, +359 888 678 7033, +359 88 920 1431
                        </li>
                        <li><Link target="_blank" to="https://goo.gl/maps/uFWqfeUB9MeZCP4KA"
                                  className={styles.directionButton}> Упътване </Link></li>
                    </ul>
                </div>
                <div className={styles.contactImage}>
                    <img src={shop} alt="Store"/>
                </div>
            </div>
            <div className={styles.contactFormContainer}>
                <h2>Изпратете ни, съобщение!</h2>
                <p>Работим и по заявки на клиента, ако имате по специфични желания,
                    от показаните в страницата, свържете се с нас да ги обсъдим.
                </p>
                <p> Може да ни потърсите на телефоните оставени за контакт или да ни изпратите мейл.</p>
                <p> Ще се радваме да обсъдим вашите предложения! </p>

                <form className={styles.contactForm}>
                    <input name="fullname" className={styles.fullname} placeholder="Име и Фамилия..."/>
                    <input className={styles.email} placeholder="Вашия мейл..."/>
                    <input className={styles.message} placeholder="Вашето съобщение..."   type="text"/>
                    <input type="submit" className={styles.submitContactButton} name="submit" value="Изпрати"/>
                </form>
            </div>

        </section>

    )
}

export default Contacts;