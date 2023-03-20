import {useState} from "react"
import {Link} from "react-router-dom";

import salvia from "../footer/images/salvia.png"

const baseUrl = 'http://localhost:8000';

function Login () {
    const [loginValues, setLoginValues] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e) =>  {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        fetch(`${baseUrl}/login`, { method: form.method, body: formJson });
        console.log(formJson);
    }
    const onLoginValueChange = (e) => {
        setLoginValues(state => ({...state, [e.target.name]: e.target.value}))
        console.log(loginValues.email)
        console.log(loginValues.password)
    }


    return (
        <section id="login" className="login">
            <div className="login__form">
                <form method="post" onSubmit={handleSubmit}>
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
