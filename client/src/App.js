import {Fragment, useState} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";


import * as authService from './services/authService'
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";
import HomePage from "./components/home-page/HomePage";
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import Contacts from "./components/contacts/Contacts";
import CatalogPage from "./components/catalog/CatalogPage";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";
import {AuthContext} from "./context/authContext";


function App() {
    const navigate = useNavigate()
    const [auth, setAuth] = useState({})

    const onLoginSubmit = async (data) => {

        try {
            const result = await authService.login(data);
            setAuth(result);
            navigate('/catalog');

        } catch (error) {
            console.log(error)
        }

    }
    const onRegisterSubmit = async (values) => {
        try {
            const result = await authService.register(values);
            setAuth(result);
            navigate('/catalog');

        }catch (error) {
            console.log(error);
        }
    }

    const onLogout = async () => {

        // // TODO server logout also
        //
        // await authService.logout()

        setAuth({});
    }

    const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.token,
        email: auth.userEmail,
        isAuthenticated: !!auth.token,
    }
    return (
        <AuthContext.Provider value={context}>
            <Fragment>
                <Header/>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/catalog" element={<CatalogPage/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/logout" element={<Logout/>}/>
                </Routes>
                <Footer/>
            </Fragment>
        </AuthContext.Provider>

    )
}

export default App;
