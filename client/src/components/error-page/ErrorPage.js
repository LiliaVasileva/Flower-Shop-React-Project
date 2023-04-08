import salvia from "./images/salvia.png"
import styles from "./ErrorPage.module.css"


function ErrorPage(props) {
    return (
    
    <section id="errorPage" className={styles.errorPage}>
        <div className={styles.imageContainer}>
            <img alt="Logo" src={salvia}/>
        </div>
    <div className={styles.errorPageInfo}>
        <h2>Възникна грешка, моля опитайте отново!</h2>
        <h3>{props.message}</h3>
    </div>

</section>
)

}

export default ErrorPage;