import {Link} from "react-router-dom";
import salvia from "../footer/images/salvia.png";
import {useState} from "react";

import * as userService from '../../services/userServices/userServices'

function Register () {
    const [registerValues, setRegisterValues] = useState({
        email: '',
        password: '',
        repeatPassword: '',
        firstName: '',
        lastName: ''
    });

    const onRegisterChange = (e) => {
       setRegisterValues(state => ({...state, [e.target.name]: e.target.value}));
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson)
        userService.create(formJson).then(
            user => { console.log(user)}
        )
    }



    return (<section id="register" className="register">
            <div className="login__form">
                <form method="post" onSubmit={onSubmitHandler}>
                    <h3>Влез в своя профил от тук</h3>
                    <input name="email" className="email" id="email" value={registerValues.email} onChange={onRegisterChange} placeholder="Email..."/>
                    <input name="firstName" className="firstName" id="firstName" value={registerValues.firstName} onChange={onRegisterChange} placeholder="First name..."/>
                    <input name="lastName" className="lastName" id="lastName" value={registerValues.lastName} onChange={onRegisterChange} placeholder="Last name..."/>
                    <input className="password" name="password" id="password" type="password" value={registerValues.password} onChange={onRegisterChange} placeholder="Password..."/>
                    <input className="password" name="repeatPassword" id="repeatPassword" type="password" value={registerValues.password} onChange={onRegisterChange} placeholder="Repeat Password..."/>
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
export default Register;