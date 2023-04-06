import {React} from "react";
import Item from "../item/Item";

import {useAuthContext} from "../../context/authContext";
import {useUserContext} from "../../context/userContext";
import {useItemContext} from "../../context/itemContext";

import styles from "./ProfilePage.module.css"
import salvia from "./images/logo-leaf.png";


function ProfilePage() {
    const {items} = useItemContext();
    const {userId, userEmail} = useAuthContext();
    const {user} = useUserContext()



    const categoryValues = {
        "funeral": "Погребения",
        "wedding": "Сватба",
        "assortment": "Асортимент",
        "other": "Други"
    }

    return (
        <div className={styles.profile}>
                <div className={styles.profileData}>
                    <div className={styles.personal}>
                        <div className="edit">
                            <p>Име: {user.firstName} {user.lastName}</p>
                            <p>Имейл: {user.email}</p>
                        </div>
                        <div className={styles.data}>
                            <p>Коментари: <span>56</span></p>
                        </div>
                </div>
                <div className={styles.comments}>
                    <h3> Моите коментари: </h3>
                    <div className={styles.comment}><div><img alt="Salvia-png" className={styles.logoImg} src={salvia}/></div><div><p> Това е страхотен букет!</p></div></div>
                    <div className={styles.comment}><div><img alt="Salvia-png" className={styles.logoImg} src={salvia}/></div><div><p> Това е страхотен букет!</p></div></div>
                    <div className={styles.comment}><div><img alt="Salvia-png" className={styles.logoImg} src={salvia}/></div><div><p> Това е страхотен букет!</p></div></div>
                </div>
            </div>
            <h1 className={styles.title}>Моите цветя <img alt="Salvia-png" className={styles.logoImg} src={salvia}/></h1>
            <div className={styles.items}>
                {items ? items.filter(x => x.owner === userId)
                    .map(x => <Item key={x._id} {...x} />) : items.map(
                    x => <Item key={x._id} {...x} />
                )}
                {items.length === 0 && (
                    <h3 className={styles.noArticles}>Все още нямате създадени асортименти! Моля добавете
                        асортименти!</h3>
                )}
            </div>
        </div>
    )
}

export default ProfilePage;