import {createContext, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import * as itemService from "../services/itemService";


export const ItemContext = createContext();

export const ItemProvider = ({children,}) => {

    const navigate = useNavigate()
    const [items, setItems] = useState([]);

    useEffect(() => {
        itemService.getAll()
            .then(result => {
                setItems(result)
            })
    }, []);

    const editItemsState = async (itemId, values) => {
        try {
            const newItems = items.map(x => x._id === itemId ? values : x);
            setItems(newItems)
        } catch (err){
            console.log(err)
        }
    }

    const deleteItemState = async (itemId) => {
        try{
            const newItems = items.filter(x => x._id !== itemId);
            setItems(newItems)
        }catch (err){
            console.log(err)
        }
    }

    const onCreateItem = async (values) => {
        try {
            const item = await itemService.create(values);
            setItems(state => [...state, item]);
            navigate('/catalog');
        } catch (error) {
            console.log(error);
        }

    }

    const context = {
        onCreateItem,
        editItemsState,
        deleteItemState,
        items,
        setItems
    }

    return (
        <ItemContext.Provider value={context}>
            {children}
        </ItemContext.Provider>
    )

}

export const useItemContext = () => {
    const context = useContext(ItemContext);
    return context;
}