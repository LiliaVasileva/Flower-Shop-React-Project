import Item from "../item/Item";
import {Fragment, useState} from "react";

function ItemsConteiner ({items}) {
    
    return(
        <Fragment>
            {items.map(x =>
                <Item key={x._id} {...x} />
            )}
            {items.length === 0 && (
                <h3 className="no-articles">No flowers yet!</h3>
            )}
        </Fragment>

    )
}

export default ItemsConteiner;