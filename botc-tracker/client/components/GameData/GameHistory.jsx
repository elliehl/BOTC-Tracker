import { useContext, useEffect, useState } from "react";
import styles from "../../styles/AddGameButton.module.css"
import styles1 from "../../styles/GameHistory.module.css"
const Modal = require("react-modal")
import {GameContext} from "../../contexts/GameContext"
import Game from "./Game"
import AddGameForm from "./AddGameForm"
import Pagination from "./Pagination"

const DisplayGames = () => {

    const {gameHistory, isLoggedIn} = useContext(GameContext)
    const [currentPage, setCurrentPage] = useState(1)
    const [gamesPerPage, setGamesPerPage] = useState(20)
    const lastGameOnPage = currentPage * gamesPerPage
    const firstGameOnPage = lastGameOnPage - gamesPerPage
    const currentDisplayedGameHistory = gameHistory.slice(firstGameOnPage, lastGameOnPage)

    const [viewAddModal, setViewAddModal] = useState(false)
    
    useEffect(() => {
        setViewAddModal(false)
    }, [gameHistory])

    return (
        <div>
        {isLoggedIn ? (
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
                {currentDisplayedGameHistory.map((game) => (
                    <tr key={game.id}>
                        {gameHistory.length === 0 && 'No Game History'}
                        <Game game={game}/>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>

        <Pagination gamesPerPage={gamesPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} firstGameOnPage={firstGameOnPage} lastGameOnPage={lastGameOnPage}/>

        <Modal isOpen={viewAddModal} onRequestClose={() => setViewAddModal(false)} className={styles["modal"]}>
            <AddGameForm setViewAddModal={setViewAddModal}/>
        </Modal>
        </div>
        ) : <h3>Please log in</h3>
        }
        </div>
    )
}

export default DisplayGames