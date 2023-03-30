function Item({_id, name, price, category, image}) {
    const categoryValues = {
        "funeral": "Погребения",
        "wedding": "Сватба",
        "assortment": "Асортимент",
        "other": "Други"
    }


    return (
        <section id="items">
            <article className="article-card">
                <figure className="article-image">
                    <img src={image} alt="Flower-Item"/>
                </figure>
                <div className="article-content">
                    <h2 className="card-category">{categoryValues[category]}</h2>
                    <h3 className="card-title">{name}</h3>
                    <h3 className="card-title">Цена: {price} лв</h3>
                </div>
            </article>
        </section>
    )
}

export default Item;