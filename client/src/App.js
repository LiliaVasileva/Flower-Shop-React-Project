import {Fragment, useState, useEffect} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";


import {AuthProvider} from "./context/authContext";
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
import ItemDetails from "./components/item-details/ItemDetails";




function App() {
    const [items, setItems]  = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        itemService.getAll()
            .then(result => {
                setItems(result)
            })
    }, []);



    const onCreateItem = async (values) => {
        try {
            const item = await itemService.create(values);
            setItems(state => [...state, item]);
            navigate('/catalog');
        }catch (error) {
            console.log(error);
        }

    }

    return (
        <AuthProvider>
            <Fragment>
                <Header/>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/catalog" element={<CatalogPage flowers={items}/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/logout" element={<Logout/>}/>
                    <Route path="/flowers/create" element={<CreateItem onCreate={onCreateItem}/>}/>
                    <Route path='/catalog/item/:itemId/details' element={<ItemDetails/>} />
                </Routes>
                <Footer/>
            </Fragment>
        </AuthProvider>
    )
}

export default App;
