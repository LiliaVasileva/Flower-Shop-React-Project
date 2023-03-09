import workingHours from "../images/we_are_open.jpg";

function Contacts() {
    return (
        <section id="contact" className="section">
            <div className="info">
                <h2 className="info__title">Работно време</h2>
                <ul className="info__items" role="list">
                    <li className="info__items__li ">
                        Понеделник - 8 - 17 ч.
                    </li>
                    <li className="info__items__li ">
                        Вторник - 8 - 17 ч.
                    </li>
                    <li className="info__items__li ">
                        Сряда - 8 - 17 ч.
                    </li>
                    <li className="info__items__li ">
                        Четвъртък - 8 - 17 ч.
                    </li>
                    <li className="info__items__li ">
                        Петък - 8 - 17 ч.
                    </li>
                    <li className="info__items__li ">
                        Събота - 8 - 17 ч.
                    </li>
                    <li className="info__items__li ">
                        Неделя - 8 - 13 ч.
                    </li>
                </ul>
            </div>
            <div className="image">
                <img src={workingHours} alt=""/>
            </div>
        </section>
    )
}

export default Contacts;