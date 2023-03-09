import flowerImageOne from "./images/IMG_20211104_111319.jpg"
import flowerImageTwo from "./images/IMG_20211111_082038.jpg"
import flowerImageThree from "./images/IMG_20211104_144540.jpg"
import flowerImageForth from "./images/IMG_20211111_082126.jpg"

function Item() {
    return (
        <section id="items">
            <article className="article-card">
                <figure className="article-image">
                    <img src={flowerImageOne} alt="Flower-Item"/>
                </figure>
                <div className="article-content">
                    <a href="" className="card-category">Погребения</a>
                    <h3 className="card-title">Венец</h3>
                    <h3 className="card-title">Цена: 50 лв</h3>
                </div>
            </article>
            <article className="article-card">
                <figure className="article-image">
                    <img src={flowerImageTwo} alt="Flower-Item"/>
                </figure>
                <div className="article-content">
                    <a href="" className="card-category">Погребения</a>
                    <h3 className="card-title">Венец</h3>
                    <h3 className="card-title">Цена: 50 лв</h3>
                </div>
            </article>

            <article className="article-card">
                <figure className="article-image">
                    <img src={flowerImageThree} alt="Flower-Item"/>
                </figure>
                <div className="article-content">
                    <a href="" className="card-category">Погребения</a>
                    <h3 className="card-title">Венец</h3>
                    <h3 className="card-title">Цена: 50 лв</h3>
                </div>
            </article>

            <article className="article-card">
                <figure className="article-image">
                    <img src={flowerImageForth} alt="Flower-Item"/>
                </figure>
                <div className="article-content">
                    <a href="" className="card-category">Погребения</a>
                    <h3 className="card-title">Венец</h3>
                    <h3 className="card-title">Цена: 50 лв</h3>
                </div>
            </article>
            <article className="article-card">
                <figure className="article-image">
                    <img src={flowerImageOne} alt="Flower-Item"/>
                </figure>
                <div className="article-content">
                    <a href="" className="card-category">Погребения</a>
                    <h3 className="card-title">Венец</h3>
                    <h3 className="card-title">Цена: 50 лв</h3>
                </div>
            </article>
            <article className="article-card">
                <figure className="article-image">
                    <img src={flowerImageTwo} alt="Flower-Item"/>
                </figure>
                <div className="article-content">
                    <a href="" className="card-category">Погребения</a>
                    <h3 className="card-title">Венец</h3>
                    <h3 className="card-title">Цена: 50 лв</h3>
                </div>
            </article>

            <article className="article-card">
                <figure className="article-image">
                    <img src={flowerImageThree} alt="Flower-Item"/>
                </figure>
                <div className="article-content">
                    <a href="" className="card-category">Погребения</a>
                    <h3 className="card-title">Венец</h3>
                    <h3 className="card-title">Цена: 50 лв</h3>
                </div>
            </article>

            <article className="article-card">
                <figure className="article-image">
                    <img src={flowerImageForth} alt="Flower-Item"/>
                </figure>
                <div className="article-content">
                    <a href="" className="card-category">Погребения</a>
                    <h3 className="card-title">Венец</h3>
                    <h3 className="card-title">Цена: 50 лв</h3>
                </div>
            </article>

        </section>
    )
}

export default Item;