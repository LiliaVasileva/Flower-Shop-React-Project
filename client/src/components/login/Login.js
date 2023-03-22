import {useContext} from "react"
import {Link} from "react-router-dom";

import salvia from "../footer/images/salvia.png"
import {AuthContext} from "../../context/authContext";
import {useForm} from "../../hooks/useForm";


function Login() {
    const {onLoginSubmit} = useContext(AuthContext);

    const {values, changeHandler, onSubmit} = useForm({
        email: '',
        password: ''
    }, onLoginSubmit);


    return (
        <section id="login" className="login">
            <div className="login__form">
                <form method="POST" onSubmit={onSubmit}>
                    <h3>Влез в своя профил от тук</h3>
                    <input name="email" className="email" id="email" value={values.email} onChange={changeHandler}
                           placeholder="Email..."/>
                    <input className="password" name="password" id="password" type="password" value={values.password}
                           onChange={changeHandler} placeholder="Password..."/>
                    <input type="submit" className="submit" name="submit" value="Вход"/>
                    <h5>Нямаш профил?Регистрирай се, <Link to="/register">тук</Link>!</h5>
                    <h5>Забравена парола?Заяви нова парола, <Link to="/change">тук</Link>!</h5>
                </form>
            </div>
            <div className="image__container">
                <img alt="Logo" className="image" src={salvia}/>
            </div>
        </section>
    )

}

export default Login;
