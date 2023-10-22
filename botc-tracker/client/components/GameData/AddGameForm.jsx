import styles from "../../styles/AddGameButton.module.css"
import { useContext, useState } from "react"
import roleDataArray from "./roleData";
import { GameContext } from "../../contexts/GameContext";
import { Abel } from '@next/font/google'
const roleList = roleDataArray.map((role) => role.name).sort()

const abel = Abel({ weight: '400', subsets: ['latin'] })

const AddGameForm = ({setViewAddModal}) => {

    const {addGame} = useContext(GameContext)

    const [id, setId] = useState(null)
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
        <div className={abel.className}>
        <form action="/GameData" method="POST" id="overallForm" className={styles["form"]} onSubmit={handleSubmit}>
            <div className={styles['close-icon']}>
                <button onClick={() => setViewAddModal(false)} className={styles['close-icon-button']}>X</button>
            </div>
            <div className={styles["form-row"]}>
                <label htmlFor="starting-role-box" className={styles["left-label"]}>Starting Role </label>
                <input id="starting-role-box" list="roles" name="Starting Role" required={true} value={starting_Role} onChange={(e) => setStarting_Role(e.target.value)}></input>
                <datalist id="roles">
                    {roleList.map((roleName) => <option>{roleName}</option>)}
                </datalist>
            </div>
            <div className={styles["form-row"]}>
                <label htmlFor="final-role-box" className={styles["left-label"]}>Final Role </label>
                <input id="final-role-box" list="roles" name="Final Role" required={true} value={final_Role} onChange={(e) => setFinal_Role(e.target.value)}></input>
                <datalist id="roles">
                    {roleList.map((roleName) => <option>{roleName}</option>)}
                </datalist>
            </div>
            <div className={styles["form-row"]}>
                <label htmlFor="comments-box" className={styles["left-label"]}>Comments </label>
                <input id="comments-box" type="text" value={comments} onChange={e => setComments(e.target.value)}></input>
            </div>
            <div className={styles["form-row"]}>
                <label htmlFor="date-box" className={styles["left-label"]}>Date</label>
                <input id="date-box" type="date" value={date} onChange={e => setDate(e.target.value)}></input>
            </div>
            <div className={styles["alignment-container"]}>
                <label htmlFor="alignment-box" className={styles["left-label"]}>Alignment </label>
                <input id="alignment-box" type="checkbox" className={styles["alignment-toggle"]} checked={is_Evil} onChange={e => setIs_Evil(!is_Evil)}></input>
                <label htmlFor="alignment-box">{is_Evil === true ? "Evil" : "Good"}</label>
            </div>
            <div className={styles["result-container"]}>
                <label htmlFor="result-box" className={styles["left-label"]}>Result </label>
                <input id="result-box" type="checkbox" className={styles["result-toggle"]} checked={game_Won} onChange={e => setGame_Won(!game_Won)}></input>
                <label htmlFor="result-box">{game_Won === true ? "Win" : "Loss"}</label>
            </div>
            <div className={styles["modal-submit-row"]}>
                <button type="submit" className={styles["modal-submit-button"]}>Submit</button>
                <button onClick={() => setViewAddModal(false)} className={styles["modal-submit-button"]}>Cancel</button>
            </div>
        </form>
        </div>
    )
}

export default AddGameForm