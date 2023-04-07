import {Link, useNavigate} from "react-router-dom";

import {useForm} from "../../hooks/useForm";
import * as emailService from "../../services/emailService"
import styles from "./Contacts.module.css"
import shop from "./images/The-Flower-Shop-Bruton-Jo.jpg"

function Contacts() {

    const navigate = useNavigate()

    const onContactSubmit = async (values) => {
        try {
            console.log(values)
            await emailService.sendEmail(values);
            navigate('/contacts');
        } catch (error) {
            console.log(error)
        }

    }

    const {values, changeHandler, onSubmit} = useForm({
        fullName: '',
        email: '',
        emailContent: '',

    }, onContactSubmit);

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

                <form className={styles.contactForm} onSubmit={onSubmit}>
                    <input value={values.fullName} name="fullName" onChange={changeHandler} className={styles.fullname}
                           placeholder="Име и Фамилия..."/>
                    <input value={values.email} name="email" className={styles.email} onChange={changeHandler} placeholder="Вашия мейл..."/>
                    <input value={values.emailContent} name="emailContent" onChange={changeHandler} className={styles.message}
                           placeholder="Вашето съобщение..." type="text"/>
                    <input type="submit" className={styles.submitContactButton} name="submit" value="Изпрати"/>
                </form>
            </div>

        </section>

    )
}

export default Contacts;