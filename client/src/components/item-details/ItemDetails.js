import styles from "./ItemDetails.module.css"



function ItemDetails () {

    const { userId } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
    const { gameId } = useParams();
    const [game, setGame] = useState({});
    const gameService = useService(gameServiceFactory)
    const navigate = useNavigate();

    useEffect(() => {
        itemService.getOne(itemId)
            .then(result => {
                setGame(result);
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

    const isOwner = item._ownerId === userId;

    const onDeleteClick = async () => {
        await itemService.delete(item._id);

        // TODO: delete from state

        navigate('/catalog');
    };

    return (
        <div className={styles.itemDetailContainer}>
                <div className={styles.itemImageContainer}>
                    <img alt="Item"/>
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