
function Item({_id, name, price, category, image }) {

    
    return (
        <section id="items">
            <article className="article-card">
                <figure className="article-image">
                    <img src={image} alt="Flower-Item"/>
                </figure>
                <div className="article-content">
                    <a href="" className="card-category">{category}</a>
                    <h3 className="card-title">{name}</h3>
                    <h3 className="card-title">Цена: {price} лв</h3>
                </div>
            </article>
        </section>
    )
}

export default Item;