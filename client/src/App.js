import {Fragment} from "react";
import {Route, Routes} from "react-router-dom";

import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";
import HomePage from "./components/home-page/HomePage";
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import Contacts from "./components/contacts/Contacts";
import Catalog from "./components/home-page/catalog/Catalog";
import CatalogPage from "./components/catalog/CatalogPage";
import Register from "./components/register/Register";


function App() {
    return (
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
    )
}

export default App;
