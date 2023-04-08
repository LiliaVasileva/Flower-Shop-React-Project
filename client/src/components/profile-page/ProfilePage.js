import {React} from "react";
import Item from "../item/Item";

import {useUserContext} from "../../context/userContext";
import {useItemContext} from "../../context/itemContext";


import styles from "./ProfilePage.module.css"
import salvia from "./images/logo-leaf.png";
import {Link} from "react-router-dom";
import { useAuthContext } from "../../context/authContext";


function ProfilePage() {
    const {items} = useItemContext();
    const {userId} = useAuthContext()
    const {user, userComments} = useUserContext();

    let comments = []

    for (let key in userComments) {
        let item = userComments[key]
        for (let key in item.commentList) {
            if (item.commentList[key].userId === userId) {
                comments.push({itemId: item._id, comment: item.commentList[key].comment})
            }
        }
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
                        <p>Коментари: <span>{comments.length}</span></p>
                    </div>
                </div>
                <div className={styles.comments}>
                    <h3> Моите коментари: </h3>
                    {comments ? comments.map(x =>
                        <div key={comments.indexOf(x)} className={styles.comment}>
                            <div><img alt="Salvia-png" className={styles.logoImg} src={salvia}/></div>
                            <div><p> {x.comment} </p></div>
                            <div>
                                <button className={styles.buttonDetails}><Link className={styles.buttonDetailsLink} to={`/catalog/${x.itemId}/details`}>Преглед</Link>
                                </button>
                            </div>
                        </div>
                    ) : <h4>Все още нямате коментари!</h4>}

                </div>
            </div>
            <h1 className={styles.title}>Моите цветя <img alt="Salvia-png" className={styles.logoImg} src={salvia}/>
            </h1>
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