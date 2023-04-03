import styles from "./ItemDetails.module.css"
import itemImage from "./images/IMG_20211104_111319.jpg"


function ItemDetails () {
    return (
        <div className={styles.itemDetailContainer}>
                <div className={styles.itemImageContainer}>
                    <img src={itemImage} alt="Item"/>
                </div>
                <div className={styles.detailsInfo}>
                    <h2>Венец с бели хризантеми</h2>
                    <h3>Погребения</h3>
                    <p>45 лв.</p>
                    <p>
                        he original words and form of a written or printed work.
                        (2) : an edited or emended copy of
                        an original work.
                        a work containing such text.
                        the main body of printed or written matter on a page.
                    </p>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
        </div>
    )
}


export default ItemDetails;