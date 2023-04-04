import {Fragment, useState, useEffect} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";


import {AuthProvider} from "./context/authContext";
import {ItemProvider} from "./context/itemContext";
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
import ItemDetails from "./components/item-details/ItemDetails";
import EditItem from "./components/item-edit/EditItem";


function App() {
    return (
        <AuthProvider>
            <ItemProvider>
                <Fragment>
                    <Header/>
                    <Navigation/>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/logout" element={<Logout/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                        <Route path="/catalog" element={<CatalogPage/>}/>
                        <Route path="/flowers/create" element={<CreateItem/>}/>
                        <Route path='/catalog/:itemId/details' element={<ItemDetails/>}/>
                        <Route path="/catalog/:itemId/edit" element={<EditItem/>}/>
                    </Routes>
                    <Footer/>
                </Fragment>
            </ItemProvider>
        </AuthProvider>
    )
}

export default App;
