import {useForm} from "../../hooks/useForm";
import styles from "./CreateItem.module.css"
import {useItemContext} from "../../context/itemContext";

function CreateItem() {

    const {onCreateItem, itemError} = useItemContext()

    const {values, changeHandler, onSubmit} = useForm({
        name: '',
        price: '',
        category: '',
        description: '',
        image: ''
    }, onCreateItem);

    return (
        <div className={styles.create} id="create">
            <h2 className={styles.label}>Създай Нов Асортимент</h2>
            { itemError ? <h4 className="error">{itemError}</h4> : null}
            <form method="POST" onSubmit={onSubmit} id="create__form" className={styles.createForm}
                  encType="multipart/form-data">
                <input type="text" id="name" name="name" className={styles.name} placeholder="Въведи име" value={values.name}
                       onChange={changeHandler}/>
                <input id="price" name="price" className={styles.price} placeholder="Въведи цена" onChange={changeHandler}/>
                <select id="category" name="category" className={styles.category} value={values.category} onChange={changeHandler}>
                    <option value="" disabled>Избери Категория</option>
                    <option value="wedding">Сватба</option>
                    <option value="funeral">Погребения</option>
                    <option value="assortment">Асортимент</option>
                    <option value="other">Други</option>
                </select>
                <input type="text" id="description" name="description" className={styles.description}
                       placeholder="Описание на продукта..." onChange={changeHandler}/>
                <input type="text" id="image" name="image" className={styles.image} placeholder="Линк към снимка ..."
                       onChange={changeHandler}/>
                <input type="submit" className={styles.submit} name="submit" value="Създай"/>
            </form>
        </div>
    )
}

export default CreateItem;