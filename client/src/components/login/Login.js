import {useState} from "react"
import {Link} from "react-router-dom";

import salvia from "../footer/images/salvia.png"
import {login} from "../../services/authService";

function Login () {
    const [loginValues, setLoginValues] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries())
        console.log(formJson)
        const result =  login(formJson)
    }


    const onLoginValueChange = (e) => {
        setLoginValues(state => ({...state, [e.target.name]: e.target.value}))
    }

    return (
        <section id="login" className="login">
            <div className="login__form">
                <form method="POST" onSubmit={handleSubmit}>
                    <h3>Влез в своя профил от тук</h3>
                    <input name="email" className="email" id="email" value={loginValues.email} onChange={onLoginValueChange} placeholder="Email..."/>
                    <input className="password" name="password" id="password" type="password" value={loginValues.password} onChange={onLoginValueChange} placeholder="Password..."/>
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
