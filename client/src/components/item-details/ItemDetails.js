import {useEffect, useContext, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";


import * as itemService from "../../services/itemService"
import {AuthContext} from "../../context/authContext";
import styles from "./ItemDetails.module.css"


function ItemDetails() {
    const {userId, editItemsState } = useContext(AuthContext);
    // const [username, setUsername] = useState('');
    // const [comment, setComment] = useState('');
    const {itemId} = useParams();
    const [item, setItem] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        itemService.getOne(itemId)
            .then(result => {
                setItem(result);
            })
    }, [itemId]);


    // // const onCommentSubmit = async (e) => {
    // //     e.preventDefault();

    // //     const result = await gameService.addComment(gameId, {
    // //         username,
    // //         comment,
    // //     });

    //     setGame(state => ({ ...state, comments: { ...state.comments, [result._id]: result } }));
    //     setUsername('');
    //     setComment('');
    // };

    const isOwner = item.owner === userId;

    const onDeleteClick = async () => {
        const confirmation  = window.confirm("Сигурни ли сте, че искате да изтриете този асортимент?");

        if(confirmation) {
            const itemId = item._id
            await itemService.deleteItem(itemId)
            editItemsState(itemId, {})
            navigate("/catalog")

        }
    };

    const categoryValues = {
        "funeral": "Погребения",
        "wedding": "Сватба",
        "assortment": "Асортимент",
        "other": "Други"
    }

    return (
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
                        <button><Link className={styles.actionButtonLink} to={`/catalog/${item._id}/edit`}>Коригирай</Link>
                        </button>
                        <button onClick={onDeleteClick}>Изтрий</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ItemDetails;