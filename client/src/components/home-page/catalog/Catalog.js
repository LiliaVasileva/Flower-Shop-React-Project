import {Link} from "react-router-dom";

import weddingPicture from "../images/wedding.jpg";
import assortment from "../images/asortiment.jpg";
import funeral from "../images/funeral.jpg";


function Catalog() {
    return (
        <section id="gallery" className="section">
            <div className="gallery-articles">
                <article className="gallery__article">
                    <Link to="/catalog">
                        <h2>Сватба</h2>
                        <img src={weddingPicture} alt=""/>
                    </Link>
                </article>
                <article className="gallery__article">
                    <Link to="/catalog">
                        <h2>Асортимент</h2>
                        <img src={assortment} alt=""/>
                    </Link>
                </article>
                <article className="gallery__article">
                    <Link to="/catalog">
                        <h2>Погребения</h2>
                        <img src={funeral} alt=""/>
                    </Link>
                </article>
            </div>
        </section>
    )
}

export default Catalog;