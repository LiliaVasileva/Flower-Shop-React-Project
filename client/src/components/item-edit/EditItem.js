import { useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

import styles from "./itemEdit.module.css"
import * as itemService from "../../services/itemService";
import {useItemContext} from "../../context/itemContext";

function EditItem() {
    const [currentItem, setCurrentItem] = useState({});
    const {itemId} = useParams();
    const navigate = useNavigate();
    const { editItemsState, itemError, setItemError } = useItemContext()


    useEffect(() => {
        itemService.getOne(itemId)
            .then(result => {
                setCurrentItem(result.item);
            }).catch(error => {
                setItemError(error.error)
            })
    }, [itemId])

    const onEdit = (e) => {
        e.preventDefault();
        const itemData = Object.fromEntries(new FormData(e.target));
        itemService.edit(itemId, itemData)
            .then(result => {
                editItemsState(itemId, result)
                setItemError('')
                navigate(`/catalog/${itemId}/details`)
            }).catch(error => {
                setItemError(error.error)
            });
    }

    return (
        <div className={styles.edit} id="edit">
            
            { itemError ? <h4 className="error">{itemError}</h4> : null}
            <form method="POST" onSubmit={onEdit} id="edit__form" className={styles.editForm}
                  encType="multipart/form-data">
                <input type="text" id="name" name="name" className={styles.name} defaultValue={currentItem.name}/>
                <input id="price" name="price" className={styles.price} defaultValue={currentItem.price}/>
                <select id="category" name="category" className={styles.category} defaultValue={currentItem.category}>
                    <option value="" disabled>Избери Категория</option>
                    <option value="wedding">Сватба</option>
                    <option value="funeral">Погребения</option>
                    <option value="assortment">Асортимент</option>
                    <option value="other">Други</option>
                </select>
                <input type="text" id="description" name="description" className={styles.description}
                       defaultValue={currentItem.description}/>
                <input type="text" id="image" name="image" className={styles.image} defaultValue={currentItem.image}/>
                <input type="submit" className={styles.submit} name="submit" value="Коригирай"/>
            </form>
        </div>
    )
}

export default EditItem;