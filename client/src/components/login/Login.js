import {useState} from "react"
import {Link} from "react-router-dom";

import salvia from "../footer/images/salvia.png"

function Login () {
    const [loginValues, setLoginValues] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e) =>  {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        console.log(formData)

        fetch('/http://localhost:8000/login', { method: form.method, body: formData });

        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }
    const onLoginValueChange = (e) => {
        console.log(e.target.value)
        setLoginValues(e.target.value)
    }


    return (
        <section id="login" className="login">
            <div className="login__form">
                <form>
                    <h3>Влез в своя профил от тук</h3>
                    <input name="email" className="email" value={loginValues.email} onChange={onLoginValueChange} placeholder="Email..."/>
                    <input className="password" value={loginValues.password} onChange={onLoginValueChange} placeholder="Password..."/>
                    <input type="submit" className="submit" name="submit" value="Вход" onSubmit={handleSubmit}/>
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
