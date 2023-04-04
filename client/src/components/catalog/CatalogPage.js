import Item from "../item/Item";
import {Fragment, useState} from "react";

import styles from "./CatalogPage.module.css"
import {useItemContext} from "../../context/itemContext";

function CatalogPage() {
    const {items} = useItemContext()
    const [selected, setSelected] = useState("")

    const categoryFilterValues = {
        "Funeral": "funeral",
        "Wedding": "wedding",
        "Assortment": "assortment",
        "All": ""
    };

    function onSelectHandler(e) {
        setSelected(e.target.value)
    }

    return (
        <Fragment>
            <section className={styles.catalogFilter}>
                <div>
                    <select className={styles.select} name="filter" value={selected} onChange={onSelectHandler}
                            placeholder="Избери Категория">
                        <option value="" disabled hidden>Избери Категория</option>
                        <option value={categoryFilterValues.Wedding}>Сватба</option>
                        <option value={categoryFilterValues.Funeral}>Погребения</option>
                        <option value={categoryFilterValues.Assortment}>Асортимент</option>
                        <option value={categoryFilterValues.All}>Всички</option>
                    </select>
                </div>
            </section>
            <section className={styles.items}>
                {selected ? items.filter(x => x.category === selected)
                    .map(x => <Item key={x._id} {...x} />) : items.map(
                    x => <Item key={x._id} {...x} />
                )}

                {items.length === 0 && (
                    <h3 className={styles.noArticles}>No flowers yet!</h3>
                )}
            </section>
        </Fragment>
    )
}

export default CatalogPage;