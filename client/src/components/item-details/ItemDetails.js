import {React, useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";


import * as itemService from "../../services/itemService"
import styles from "./ItemDetails.module.css"
import {useItemContext} from "../../context/itemContext";
import {useAuthContext} from "../../context/authContext";
import salvia from "../profile-page/images/logo-leaf.png";
import {useUserContext} from "../../context/userContext";
import ErrorPage from "../error-page/ErrorPage";



function ItemDetails() {
    const {userId, isAuthenticated} = useAuthContext();
    const {deleteItemState, itemError, setItemError} = useItemContext();
    const {user} = useUserContext();
    const username  = `${user.firstName} ${user.lastName}`;
    const [comment, setComment] = useState('');
    const {itemId} = useParams();
    const [item, setItem] = useState({});
    const [comments, setComments] = useState([])
    const isOwner = item.owner === userId;
    const navigate = useNavigate();
    const categoryValues = {
        "funeral": "Погребения",
        "wedding": "Сватба",
        "assortment": "Асортимент",
        "other": "Други"
    }


    useEffect(() => {
        itemService.getOne(itemId)
            .then(result => {
                setItemError('')
                setItem(result.item);
                if(result.comments){
                    setComments([...result.comments])
                }
            }).catch(error =>{
                setItemError('Този артикул не може да бъде намерен!')
                console.log(error)
            })
    }, [itemId, itemError]);


    const onCommentSubmit = async (e) => {
        e.preventDefault();
        try {
            await itemService.addComment(itemId, {
                username,
                comment,
            })
            setComments([...comments, {userId: userId, username: username, comment: comment}])
            setComment('');
        } catch (err) {
            console.log(err)
        }
    };

    const changeHandler = (e) => {
        setComment(e.target.value);
    };


    const onDeleteClick = () => {
        const confirmation = window.confirm("Сигурни ли сте, че искате да изтриете този асортимент?");

        if (confirmation) {
            const itemId = item._id
            itemService.deleteItem(itemId).then(
                () => {
                    deleteItemState(itemId)
                    navigate("/catalog")
                }
            )

        }
    };


    if (itemError) {

        return <ErrorPage message={itemError}/>
    }

    return (
            <div className={styles.container}>
            <div className={styles.itemDetailContainer}>
                <div className={styles.itemImageContainer}>
                    <img src={item.image} alt="Item"/>
                </div>
                <div className={styles.detailsInfo}>
                    <h2 className={styles.itemTitle}>{item.name}</h2>
                    <h3 className={styles.itemCategory}>{categoryValues[item.category]}</h3>
                    <p className={styles.itemPrice}>{item.price} лв.</p>
                    <p className={styles.itemDescription}>
                        {item.description}
                    </p>
                    {isOwner && (
                        <div className={styles.actionButtons}>
                            <button><Link className={styles.actionButtonLink}
                                          to={`/catalog/${item._id}/edit`}>Коригирай</Link>
                            </button>
                            <button onClick={onDeleteClick}>Изтрий</button>
                        </div>
                    )}
                </div>
            </div>

            <div className={styles.comments}>
                {!isOwner && isAuthenticated && (
                    <form method="POST" onSubmit={onCommentSubmit}>
                        <input onChange={changeHandler} value={comment} name="comment" className={styles.inputTextField} type="text"
                               placeholder="Споделете вашата оценка..."/>
                        <input type="submit" className={styles.formSubmit} name="submit" value="Изпрати"/>
                    </form>
                )}
                {!comments?.length && (<div className={styles.comment}>
                    <div><img alt="Salvia-png" className={styles.logoImg} src={salvia}/></div>
                    <h2 className={styles.noCommentsMessage}>Бъдете първи! Сподели мнението си!</h2>
                </div>)}

                {comments && comments.map(x => (
                    <div key={comments.indexOf(x)} className={styles.comment}>
                        <div><img alt="Salvia-png" className={styles.logoImg} src={salvia}/></div>
                        <div><p>{x.username}:</p></div>
                        <div><p> {x.comment}</p></div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default ItemDetails;