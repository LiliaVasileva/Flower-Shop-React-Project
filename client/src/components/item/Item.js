

import {Link} from "react-router-dom"
import styles from "./Item.module.css"

function Item({_id, name, price, category, image}) {

    const categoryValues = {
        "funeral": "Погребения",
        "wedding": "Сватба",
        "assortment": "Асортимент",
        "other": "Други"
    }

    return (
            <article className={styles.articleCard}>
                <figure className={styles.articleImage}>
                    <img src={image} alt="Flower-Item"/>
                </figure>
                <div className={styles.articleContent}>
                    <h2 className={styles.cardCategory}>{categoryValues[category]}</h2>
                    <h3 className={styles.cardTitle}>{name}</h3>
                    <h3 className ={styles.cardTitle}>Цена: {price} лв</h3>
                    <button className={styles.actionButton}><Link className={styles.actionButtonLink} to={`/catalog/item/${_id}/details`}>Детайли</Link></button>
                </div>
            </article>)
}

export default Item;