import {createContext, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import * as itemService from "../services/itemService";


export const ItemContext = createContext();

export const ItemProvider = ({children,}) => {

    const navigate = useNavigate()

    const [items, setItems] = useState([]);

    const [itemError, setItemError] = useState("")

    useEffect(() => {
        itemService.getAll()
            .then(result => {
                setItems(result)
                setItemError('')
            }).catch(result => {
                setItemError(result.error)
            })
    }, []);

    

    const editItemsState = async (itemId, values) => {
        try {
            const newItems = items.map(x => x._id === itemId ? values : x);
            setItems(newItems)
            setItemError('')
        } catch (err){
           setItemError(err.error)
        }
    }

    const deleteItemState = async (itemId) => {
        try{
            const newItems = items.filter(x => x._id !== itemId);
            setItemError('')
            setItems(newItems)
        }catch (err){
            setItemError(err.error)
        }
    }

    const onCreateItem = async (values) => {
        try {
            const item = await itemService.create(values);
            setItems(state => [...state, item]);
            setItemError('')
            navigate('/catalog');
        } catch (error) {
            setItemError(error.error)
        }

    }

    const context = {
        onCreateItem,
        editItemsState,
        deleteItemState,
        items,
        setItems,
        itemError,
        setItemError,
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