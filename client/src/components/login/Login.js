import {Link} from "react-router-dom";

import salvia from "../footer/images/salvia.png"
import {useAuthContext} from "../../context/authContext";
import {useForm} from "../../hooks/useForm";
import styles from './Login.module.css'

function Login() {
    const {onLoginSubmit, authError} = useAuthContext();


    const {values, changeHandler, onSubmit} = useForm({
        email: '',
        password: ''
    }, onLoginSubmit);


    return (
        <section id="login" className={styles.login}>
            <div className={styles.loginForm}>
                <form method="POST" onSubmit={onSubmit}>
                    <h3>Влез в своя профил от тук</h3>

                    { authError ? <h4 className="error">{authError}</h4> : null}
                    
                    <input name="email" className={styles.loginEmail} id="email" value={values.email} onChange={changeHandler}
                           placeholder="Email..."/>
                    <input className={styles.loginPassword} name="password" id="password" type="password" value={values.password}
                           onChange={changeHandler} placeholder="Password..."/>
                    <input type="submit" className={styles.loginSubmit} name="submit" value="Вход"/>
                    <h5>Нямаш профил?Регистрирай се, <Link to="/register">тук</Link>!</h5>
                    {/* <h5>Забравена парола?Заяви нова парола, <Link to="/change">тук</Link>!</h5> */}
                </form>
            </div>
            <div className={styles.imageContainer}>
                <img alt="Logo" src={salvia}/>
            </div>
        </section>
    )

}

export default Login;
