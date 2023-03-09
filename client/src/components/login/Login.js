import {useState} from "react"
import {Link} from "react-router-dom";

import salvia from "../footer/images/salvia.png"
function Login () {
    const [loginValues, setLoginValues] = useState({
        username: '',
        password: ''
    })
    return (
        <section id="login" className="login">
            <div className="login__form">
                <form>
                    <h3>Влез в своя профил от тук</h3>
                    <input name="username" className="username" value={loginValues.username} onChange={() =>setLoginValues()} placeholder="Username..."/>
                    <input className="password" value={loginValues.password} onChange={() =>setLoginValues()} placeholder="Password..."/>
                    <input type="submit" className="submit" name="submit" value="Вход"/>
                    <h5>Нямаш профил?Регистрирай се, <Link to="/register">тук</Link>!</h5>
                    <h5>Забравена парола?Заяви нова парола, <Link to="/change" >тук</Link>!</h5>
                </form>
            </div>
            <div className="image__container">
                <img alt="Logo" className="image" src={salvia}/>
            </div>
        </section>
    )

}

export default Login;
