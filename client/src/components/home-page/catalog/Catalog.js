import {Link} from "react-router-dom";

import styles from "./Catalog.module.css"
import weddingPicture from "../images/wedding.jpg";
import assortment from "../images/asortiment.jpg";
import funeral from "../images/funeral.jpg";



function Catalog() {
    return (
        <section id="gallery" className={styles.section}>
            <div className={styles.galleryArticles}>
                <article className={styles.galleryArticle}>
                    <Link to="/catalog">
                        <h3>Сватба</h3>
                        <img src={weddingPicture} alt=""/>
                        <p className={styles.firstP}>Разгледай нашите сватбени украси и аранжировки</p>
                        {/*<p className={styles.secondP}>Намери вдъхновение за твоя специален ден.</p>*/}
                    </Link>
                </article>
                <article className={styles.galleryArticle}>
                    <Link to="/catalog">
                        <h3>Асортимент</h3>
                        <img src={assortment} alt=""/>
                        <p className={styles.firstP}>Запознай се с богат избор от аранжировки</p>
                    </Link>
                </article>
                <article className={styles.galleryArticle}>
                    <Link to="/catalog">
                        <h3>Погребения</h3>
                        <img src={funeral} alt=""/>
                        <p className={styles.firstP}>Погребални венци и жанданиери</p>
                    </Link>
                </article>
            </div>
        </section>
    )
}

export default Catalog;