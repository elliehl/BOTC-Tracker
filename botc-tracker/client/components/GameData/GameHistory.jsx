import { useContext, useEffect, useState } from "react";
import styles1 from "../../styles/GameHistory.module.css"
// import styles from "../../styles/AddGameButton.module.css"
const Modal = require("react-modal")
// import roleDataArray from "./roleData";
// const roleList = roleDataArray.map((role) => role.name).sort()
// const roleToSend = roleDataArray.map((role) => ({roleName: role.name, id: role.id}))
import {GameContext} from "../../contexts/GameContext"
import Game from "./Game"
import AddGameForm from "./AddGameForm"

const DisplayGames = () => {

    const {gameHistory} = useContext(GameContext)
    console.log(gameHistory, 'gameHistory')

    const [viewAddModal, setViewAddModal] = useState(false)
    
    useEffect(() => {
        setViewAddModal(false)
    }, [gameHistory])

    return (
        <div className={styles1['game-history-container']}>
        <>
        <button onClick={() => setViewAddModal(true)}>Add New Game</button>
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
                        <Game game={game}/>
                    </tr>
                ))}
            </tbody>
        </table>

        <Modal >
            <AddGameForm />
        </Modal>
        </>
        </div>
    )
}

export default DisplayGames