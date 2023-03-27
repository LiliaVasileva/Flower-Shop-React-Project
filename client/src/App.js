import {Fragment, useState} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";


import * as authService from './services/authService'
import * as itemService from './services/itemService'
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";
import HomePage from "./components/home-page/HomePage";
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import Contacts from "./components/contacts/Contacts";
import CatalogPage from "./components/catalog/CatalogPage";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";
import CreateItem from "./components/item-create/CreateItem";
import {AuthContext} from "./context/authContext";
import {useCookies} from "react-cookie";


function App() {
    const navigate = useNavigate()
    const [auth, setAuth] = useState({})
    const [cookies, setCookie, removeCookie] = useCookies(['auth'])



    const onLoginSubmit = async (data) => {

        try {
            const result = await authService.login(data);
            setAuth(result);
            setCookie( 'auth', result.token, {path: '/'})
            navigate('/catalog');

        } catch (error) {
            console.log(error)
        }

    }
    const onRegisterSubmit = async (values) => {
        try {
            const result = await authService.register(values);
            setAuth(result);
            setCookie( 'auth', result.token, {path: '/'})
            navigate('/catalog');

        }catch (error) {
            console.log(error);
        }
    }

    const onCreateItem = async (values) => {
        try {
            const result = await itemService.create(values);
            console.log(result)
            navigate('/catalog');
        }catch (error) {
            console.log(error);
        }

    }

    const onLogout = async () => {

        try {
            await authService.logout()
            setAuth({});
            removeCookie('auth', {path: '/'})
        } catch (error){
            console.log(error);
        }

    }

    const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        onCreateItem,
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
                    <Route path="/flowers/create" element={<CreateItem />}/>
                </Routes>
                <Footer/>
            </Fragment>
        </AuthContext.Provider>

    )
}

export default App;
