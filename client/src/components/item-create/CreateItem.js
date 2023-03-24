import {useContext} from "react";

import {AuthContext} from "../../context/authContext";
import {useForm} from "../../hooks/useForm";

function CreateItem() {
    const {onCreateItem} = useContext(AuthContext);

    const {values, changeHandler, onSubmit} = useForm({
        name: '',
        price: '',
        category: 'wedding',
        description: '',
        image: ''
    }, onCreateItem);

    return (
        <div className="create" id="create">
            <h2 className="label">Създай Нов Асортимент</h2>
            <form method="POST" onSubmit={onSubmit} id="create__form" className="create__form"
                  encType="multipart/form-data">
                <input type="text" id="name" name="name" className="name" placeholder="Въведи име" value={values.name}
                       onChange={changeHandler}/>
                <input id="price" name="price" className="price" placeholder="Въведи цена" onChange={changeHandler}/>
                <select id="category" name="category" className="category" value={values.category} onChange={changeHandler}>
                    {/*<option value="default" selected disabled hidden>Избери Категория</option>*/}
                    <option value="wedding">Сватба</option>
                    <option value="funeral">Погребения</option>
                    <option value="assortment">Асортимент</option>
                    <option value="other">Други</option>
                </select>
                <input type="text" id="description" name="description" className="description"
                       placeholder="Описание на продукта..." onChange={changeHandler}/>
                <input type="file" id="image" name="image" className="image" placeholder="Качи снимка..."
                       onChange={changeHandler}/>
                <input type="submit" className="submit" name="submit" value="Създай"/>
            </form>
        </div>
    )
}

export default CreateItem;