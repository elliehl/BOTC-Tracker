import { useContext, useEffect, useState } from "react";
import styles from "../../styles/AddGameButton.module.css"
import styles1 from "../../styles/GameHistory.module.css"
const Modal = require("react-modal")
import {GameContext} from "../../contexts/GameContext"
import Game from "./Game"
import AddGameForm from "./AddGameForm"
import Pagination from "./Pagination"

const DisplayGames = () => {

    const {gameHistory} = useContext(GameContext)

    const [viewAddModal, setViewAddModal] = useState(false)
    
    useEffect(() => {
        setViewAddModal(false)
    }, [gameHistory])

    return (
        <div className={styles1["game-history-return"]}>
        <button onClick={() => setViewAddModal(true)} className={styles["add-game-button"]}>Add New Game</button>
        <div className={styles1['game-history-container']}>
        {console.log(gameHistory)}
        {gameHistory.length === 0 && 'No Game History'}
        <table>
            <thead>
                <tr>
                    <th>Starting Role</th>
                    <th>Final Role</th>
                    <th>Alignment</th>
                    <th>Result</th>
                    <th>Comments</th>
                    <th>Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {gameHistory.map((game) => (
                    <tr key={game.id}>
                        {gameHistory.length === 0 && 'No Game History'}
                        <Game game={game}/>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>

        <Pagination />

        <Modal isOpen={viewAddModal} onRequestClose={() => setViewAddModal(false)} className={styles["modal"]}>
            <AddGameForm />
        </Modal>
        </div>
    )
}

export default DisplayGames