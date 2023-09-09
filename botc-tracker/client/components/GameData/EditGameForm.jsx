import { GameContext } from "../../contexts/GameContext"
import styles from "../../styles/AddGameButton.module.css"
import { useContext, useState } from "react"


const EditGameForm = ({selectedGame}) => {

    const {is_Evil, game_Won, starting_Role, final_Role} = selectedGame
    const id = selectedGame.id

    const [viewModal, setViewModal] = useState(false)
    const [alignment, setAlignment] = useState(is_Evil)
    const [result, setResult] = useState(game_Won)
    const [startingRole, setStartingRole] = useState(starting_Role)
    const [finalRole, setFinalRole] = useState(final_Role)
    const [date, setDate] = useState(selectedGame.date)
    const [comments, setComments] = useState(selectedGame.comments)

    const {updateGame} = useContext(GameContext)

    const newlyUpdatedGame = {id, alignment, result, startingRole, finalRole, date, comments}

    const handleSubmit = (e) => {
        e.preventDefault();
        updateGame(id, newlyUpdatedGame)
    }

    return (
        <form action="/GameData" method="PUT" id="overallForm" className={styles["form"]} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="starting-role-box">Starting Role</label>
                <input id="starting-role-box" list="roles" name="Starting Role" required={true} value={startingRole} onChange={(e) => setStartingRole(e.target.value)}></input>
                <datalist id="roles">
                    {roleList.map((roleName) => <option>{roleName}</option>)}
                </datalist>
            </div>
            <div>
                <label htmlFor="final-role-box">Final Role</label>
                <input id="final-role-box" list="roles" name="Final Role" required={true} value={finalRole} onChange={(e) => setFinalRole(e.target.value)}></input>
                <datalist id="roles">
                    {roleList.map((roleName) => <option>{roleName}</option>)}
                </datalist>
            </div>
            <div className={styles["alignment-container"]}>
                <input id="alignment-box" type="checkbox" className={styles["alignment-toggle"]} checked={alignment} onChange={e => setAlignment(!alignment)}></input>
                <label className="good-aligned" htmlFor="alignment-box">Good</label>
                <label className="evil-aligned" htmlFor="alignment-box">Evil</label>
            </div>
            <div className={styles["result-container"]}>
                <label htmlFor="result-box">Result</label>
                <div className={styles["button-container"]}>
                    <input id="result-box" type="checkbox" className={styles["result-button"]} checked={result} onChange={e => setResult(!result)}></input>
                </div>
            </div>
            <div>
                <label htmlFor="date-box">Date</label>
                <input id="date-box" type="date" value={date} onChange={e => setDate(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="comments-box">Comments</label>
                <input id="comments-box" type="text" value={comments} onChange={e => setComments(e.target.value)}></input>
            </div>
            <div className="bottom-modal-buttons">
                <button type="submit">Submit</button>
                <button onClick={() => setViewModal(false)}>Cancel</button>
            </div>
        </form>
    )
}

export default EditGameForm