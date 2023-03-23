import {Link} from "react-router-dom";
import person from "./images/person-1824147_960_720.webp"
import {useContext} from "react";


import {AuthContext} from "../../context/authContext";
import {useForm} from "../../hooks/useForm";

function Register() {
    const {onRegisterSubmit} = useContext(AuthContext);

    const {values, changeHandler, onSubmit} = useForm({
        email: '',
        password: '',
        repeatPassword: '',
        firstName: '',
        lastName: ''

    }, onRegisterSubmit);


    return (<section id="register" className="register">
            <h2>Регистрирай се тук!</h2>
            <div className="image__container">
                <img alt="Logo" className="image" src={person}/>
            </div>
            <div className="register__form">
                <form method="post" onSubmit={onSubmit}>
                    <input name="email" className="email" id="email" value={values.email}
                           onChange={changeHandler} placeholder="Email..."/>
                    <input name="firstName" className="firstName" id="firstName" value={values.firstName}
                           onChange={changeHandler} placeholder="First name..."/>
                    <input name="lastName" className="lastName" id="lastName" value={values.lastName}
                           onChange={changeHandler} placeholder="Last name..."/>
                    <input className="password" name="password" id="password" type="password"
                           value={values.password} onChange={changeHandler} placeholder="Password..."/>
                    <input className="password" name="repeatPassword" id="repeatPassword" type="password"
                           value={values.repeatPassword} onChange={changeHandler}
                           placeholder="Repeat Password..."/>
                    <input type="submit" className="submit" name="submit" value="Вход"/>
                    <h5>Имаш профил? Влез, <Link to="/login">тук</Link>!</h5>
                </form>
            </div>
        </section>
    )
}

export default Register;