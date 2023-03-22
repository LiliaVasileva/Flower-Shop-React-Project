import {Fragment, useState} from "react";
import {Route, Routes} from "react-router-dom";


import * as authService from './services/authService'
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";
import HomePage from "./components/home-page/HomePage";
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import Contacts from "./components/contacts/Contacts";
import CatalogPage from "./components/catalog/CatalogPage";
import Register from "./components/register/Register";
import {AuthContext} from "./context/authContext";


function App() {
    const [auth, setAuth] = useState({})

    const onLoginSubmit = async (data) => {

        try {
            const result = await authService.login(data);
            setAuth(result)

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <AuthContext.Provider value={{onLoginSubmit}}>
            <Fragment>
                <Header/>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/catalog" element={<CatalogPage/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Routes>
                <Footer/>
            </Fragment>
        </AuthContext.Provider>

    )
}

export default App;
