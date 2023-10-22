import { useContext, useEffect, useState } from "react"
import { GameContext } from "../../contexts/GameContext"
const Modal = require("react-modal")
import EditGameForm from "./EditGameForm"
import ConfirmDeleteModal from "./ConfirmDeleteModal"
import styles from "../../styles/AddGameButton.module.css"


const Game = ({game}) => {

    const {deleteGame} = useContext(GameContext)
    const [viewEditModal, setViewEditModal] = useState(false)
    const [viewConfirmDeleteModal, setViewConfirmDeleteModal] = useState(false)
    
    useEffect(() => {
        setViewEditModal(false)
    }, [game])

    return (
        <>
            <td>{game.starting_Role}</td>
            <td>{game.final_Role}</td>
            <td>{game.is_Evil === false ? 'Good' : 'Evil'}</td>
            <td>{game.game_Won === false ? 'Loss' : 'Win'}</td>
            <td>{game.comments}</td>
            <td>{game.date == "0001-01-01T00:00:00" || game.date == "" ? 'No Date' : new Date(game.date).toDateString()}</td>
            <td><button onClick={() => setViewEditModal(true)} type="button">Edit</button></td>
            <td><button onClick={() => setViewConfirmDeleteModal(true)} type="button">Delete</button></td>

            <Modal isOpen={viewEditModal} onRequestClose={() => setViewEditModal(false)} className={styles["modal"]}>
                <EditGameForm selectedGame={game} setViewEditModal={setViewEditModal}/>
            </Modal>

            <Modal isOpen={viewConfirmDeleteModal} onRequestClose={() => setViewConfirmDeleteModal(false)} className={styles["modal"]}>
                <ConfirmDeleteModal game={game} setViewConfirmDeleteModal={setViewConfirmDeleteModal}/>
            </Modal>
        </>
    )
}

export default Game