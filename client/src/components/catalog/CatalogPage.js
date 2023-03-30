import Item from "../item/Item";
import {Fragment, useState} from "react";

function CatalogPage({flowers}) {
    const [selected, setSelected] = useState("")

    const categoryFilterValues = {
        "Funeral": "funeral",
        "Wedding": "wedding",
        "Assortment": "assortment",
        "Other": "other"
    };

    function onSelectHandler(e) {
        setSelected(e.target.value)
    }

    return (
        <Fragment>
            <section id="filter">
                <div id="catalog-filter">
                    <select className="select" name="filter" value={selected} onChange={onSelectHandler}
                            placeholder="Избери Категория">
                        <option value="" disabled hidden>Избери Категория</option>
                        <option value={categoryFilterValues.Wedding}>Сватба</option>
                        <option value={categoryFilterValues.Funeral}>Погребения</option>
                        <option value={categoryFilterValues.Assortment}>Асортимент</option>
                        <option value={categoryFilterValues.Other}>Други</option>
                    </select>
                </div>
            </section>
            <section id="items">
                {selected ? flowers.filter(x => x.category == selected)
                    .map(x => <Item key={x._id} {...x} />) : flowers.map(
                    x => <Item key={x._id} {...x} />
                )}

                {flowers.length === 0 && (
                    <h3 className="no-articles">No flowers yet!</h3>
                )}
            </section>
        </Fragment>
    )
}

export default CatalogPage;