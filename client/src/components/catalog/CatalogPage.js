import {Fragment} from "react";
import Item from "../item/Item";

function CatalogPage({flowers}) {
    return (
        <section id="items">
            {flowers.map(x =>
                <Item key={x._id} {...x} />
            )}
            {flowers.length === 0 && (
                <h3 className="no-articles">No flowers yet!</h3>
            )}
        </section>
    )
}

export default CatalogPage;