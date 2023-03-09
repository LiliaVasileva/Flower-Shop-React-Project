import {Link} from "react-router-dom";

import shop from "./images/The-Flower-Shop-Bruton-Jo.jpg"

function Contacts() {
    return (
        <section id="contacts" className="contacts">
            <div className="contacts-info">
                <div className="text">
                    <h2>Заповядайте, да ни посетите!</h2>
                    <p> Магазина се намира на ул. Тодор Влайков, точно срещу СОУ "Елин Пелин". </p>
                    <ul className="address__info">
                        <li>
                            <span>Адрес:</span> Тодор Влайков №41 гр.Варна България
                        </li>
                        <li>
                            <span>Телефон:</span> 052/ 60 20 49, +359 888 678 7033, +359 88 920 1431
                        </li>
                        <li><Link target="_blank" to="https://goo.gl/maps/uFWqfeUB9MeZCP4KA"
                                  className="directions__button"> Упътване </Link></li>
                    </ul>
                </div>
                <div className="image">
                    <img src={shop} alt="Store"/>
                </div>
            </div>
            <div className="contacts-form">
                <h2>Изпратете ни, съобщение!</h2>
                <p>Работим и по заявки на клиента, ако имате по специфични желания,
                    от показаните в страницата, свържете се с нас да ги обсъдим.
                </p>
                <p> Може да ни потърсите на телефоните оставени за контакт или да ни изпратите мейл.</p>
                <p> Ще се радваме да обсъдим вашите предложения! </p>

                <form className="form">
                    <input name="fullname" className="fullname" placeholder="Име и Фамилия..."/>
                    <input className="email" placeholder="Вашия мейл..."/>
                    <input className="message" placeholder="Вашето съобщение..."   type="text"/>
                    <input type="submit" className="submit" name="submit" value="Изпрати"/>
                </form>
            </div>

        </section>

    )
}

export default Contacts;