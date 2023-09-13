import styles from "../../styles/AddGameButton.module.css"
import { useContext, useState } from "react"
import roleDataArray from "./roleData";
import { GameContext } from "../../contexts/GameContext";
const roleList = roleDataArray.map((role) => role.name).sort()

const AddGameForm = () => {

    const {addGame} = useContext(GameContext)

    const [id, setId] = useState(null)
    const [viewModal, setViewModal] = useState(false)
    const [is_Evil, setIs_Evil] = useState(false)
    const [game_Won, setGame_Won] = useState(false)
    const [starting_Role, setStarting_Role] = useState("")
    const [final_Role, setFinal_Role] = useState("")
    const [date, setDate] = useState("")
    const [comments, setComments] = useState("")

    const addedGame = {is_Evil, game_Won, starting_Role, final_Role, date, comments}

    const handleSubmit = (e) => {
        e.preventDefault();
        addGame(addedGame);
    }

    return (
        <form action="/GameData" method="POST" id="overallForm" className={styles["form"]} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="starting-role-box">Starting Role </label>
                <input id="starting-role-box" list="roles" name="Starting Role" required={true} value={starting_Role} onChange={(e) => setStarting_Role(e.target.value)}></input>
                <datalist id="roles">
                    {roleList.map((roleName) => <option>{roleName}</option>)}
                </datalist>
            </div>
            <div>
                <label htmlFor="final-role-box">Final Role </label>
                <input id="final-role-box" list="roles" name="Final Role" required={true} value={final_Role} onChange={(e) => setFinal_Role(e.target.value)}></input>
                <datalist id="roles">
                    {roleList.map((roleName) => <option>{roleName}</option>)}
                </datalist>
            </div>
            <div className={styles["alignment-container"]}>
                <label htmlFor="alignment-box">Alignment </label>
                <input id="alignment-box" type="checkbox" className={styles["alignment-toggle"]} checked={is_Evil} onChange={e => setIs_Evil(!is_Evil)}></input>
                <label htmlFor="alignment-box">{is_Evil === true ? "Evil" : "Good"}</label>
            </div>
            <div className={styles["result-container"]}>
                <label htmlFor="result-box">Result </label>
                <input id="result-box" type="checkbox" className={styles["result-toggle"]} checked={game_Won} onChange={e => setGame_Won(!game_Won)}></input>
                <label htmlFor="result-box">{game_Won === true ? "Win" : "Loss"}</label>
            </div>
            <div>
                <label htmlFor="date-box">Date </label>
                <input id="date-box" type="date" value={date} onChange={e => setDate(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="comments-box">Comments </label>
                <input id="comments-box" type="text" value={comments} onChange={e => setComments(e.target.value)}></input>
            </div>
            <div className="bottom-modal-buttons">
                <button type="submit">Submit</button>
                <button onClick={() => setViewModal(false)}>Cancel</button>
            </div>
        </form>
    )
}

export default AddGameForm