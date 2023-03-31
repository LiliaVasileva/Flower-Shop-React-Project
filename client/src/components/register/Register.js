import {Link} from "react-router-dom";
import person from "./images/person-1824147_960_720.webp"
import {useContext} from "react";


import {AuthContext} from "../../context/authContext";
import {useForm} from "../../hooks/useForm";
import styles from "./Register.module.css"

function Register() {
    const {onRegisterSubmit} = useContext(AuthContext);

    const {values, changeHandler, onSubmit} = useForm({
        email: '',
        password: '',
        repeatPassword: '',
        firstName: '',
        lastName: ''

    }, onRegisterSubmit);


    return (<section id="register" className={styles.register}>
            <h2>Регистрирай се тук!</h2>
            <div className={styles.imageContainer}>
                <img alt="Logo" src={person}/>
            </div>
            <div className={styles.registerForm}>
                <form method="post" onSubmit={onSubmit}>
                    <input name="email" className={styles.registerEmail} id="email" value={values.email}
                           onChange={changeHandler} placeholder="Email..."/>
                    <input name="firstName" className={styles.registerFirstName} id="firstName" value={values.firstName}
                           onChange={changeHandler} placeholder="First name..."/>
                    <input name="lastName" className={styles.registerLastName} id="lastName" value={values.lastName}
                           onChange={changeHandler} placeholder="Last name..."/>
                    <input className={styles.registerPassword} name="password" id="password" type="password"
                           value={values.password} onChange={changeHandler} placeholder="Password..."/>
                    <input className={styles.registerPassword} name="repeatPassword" id="repeatPassword" type="password"
                           value={values.repeatPassword} onChange={changeHandler}
                           placeholder="Repeat Password..."/>
                    <input type="submit" className={styles.registerSubmit} name="submit" value="Вход"/>
                    <h5>Имаш профил? Влез, <Link to="/login">тук</Link>!</h5>
                </form>
            </div>
        </section>
    )
}

export default Register;