import {Fragment} from "react";
import {Route, Routes} from "react-router-dom";


import {AuthProvider} from "./context/authContext";
import {ItemProvider} from "./context/itemContext";
import {UserProvider} from "./context/userContext";
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
import ProfilePage from "./components/profile-page/ProfilePage";
import ErrorPage from "./components/error-page/ErrorPage";



function App() {
    return (
        <AuthProvider>
            <ItemProvider>
                <UserProvider>
                    <Fragment>
                        <Header/>
                        <Navigation/>
                        <Routes>
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/logout" element={<Logout/>}/>
                            <Route path="/profile/:userId" element={<ProfilePage/>}/>
                            <Route path="/contacts" element={<Contacts/>}/>
                            <Route path="/catalog" element={<CatalogPage/>}/>
                            <Route path="/flowers/create" element={<CreateItem/>}/>
                            <Route path='/catalog/:itemId/details' element={<ItemDetails/>}/>
                            <Route path="/catalog/:itemId/edit" element={<EditItem/>}/>
                            <Route path="/*" element={<ErrorPage/>}/>
                        </Routes>
                        <Footer/>
                    </Fragment>
                </UserProvider>
            </ItemProvider>
        </AuthProvider>
    )
}

export default App;
