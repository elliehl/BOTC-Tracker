import { GameContext } from "../../contexts/GameContext"
import styles from "../../styles/AddGameButton.module.css"
import { useContext, useEffect, useState } from "react"
import roleDataArray from "./roleData";
import { Abel } from '@next/font/google'

const abel = Abel({ weight: '400', subsets: ['latin'] })

const roleList = roleDataArray.map((role) => role.name).sort()

const EditGameForm = ({selectedGame}) => {

    const id = selectedGame.id

    const [viewModal, setViewModal] = useState(false)
    const [is_Evil, setIs_Evil] = useState(selectedGame.is_Evil)
    const [game_Won, setGame_Won] = useState(selectedGame.game_Won)
    const [starting_Role, setStarting_Role] = useState(selectedGame.starting_Role)
    const [final_Role, setFinal_Role] = useState(selectedGame.final_Role)
    const [date, setDate] = useState(new Date(selectedGame.date).toISOString().split('T')[0])
    const [comments, setComments] = useState(selectedGame.comments)

    const {updateGame} = useContext(GameContext)

    const newlyUpdatedGame = {id, is_Evil, game_Won, starting_Role, final_Role, date, comments}

    const handleSubmit = (e) => {
        e.preventDefault();
        updateGame(id, newlyUpdatedGame)
    }

    return (
        <div className={abel.className}>
        <form action="/GameData" method="PUT" id="overallForm" className={styles["edit-form"]} onSubmit={handleSubmit}>
            <div className={styles["form-row"]}>
                <label htmlFor="starting-role-box" className={styles["left-label"]}>Starting Role</label>
                <input id="starting-role-box" list="roles" name="Starting Role" required={true} value={starting_Role} onChange={(e) => setStarting_Role(e.target.value)}></input>
                <datalist id="roles">
                    {roleList.map((roleName) => <option>{roleName}</option>)}
                </datalist>
            </div>
            <div className={styles["form-row"]}>
                <label htmlFor="final-role-box" className={styles["left-label"]}>Final Role</label>
                <input id="final-role-box" list="roles" name="Final Role" required={true} value={final_Role} onChange={(e) => setFinal_Role(e.target.value)}></input>
                <datalist id="roles">
                    {roleList.map((roleName) => <option>{roleName}</option>)}
                </datalist>
            </div>
            <div className={styles["alignment-container"]}>
                <input id="alignment-box" type="checkbox" className={styles["alignment-toggle"]} checked={is_Evil} onChange={e => setIs_Evil(!is_Evil)}></input>
                <label className="good-aligned" htmlFor="alignment-box">Good</label>
                <label className="evil-aligned" htmlFor="alignment-box">Evil</label>
            </div>
            <div className={styles["result-container"]}>
                <label htmlFor="result-box">Result</label>
                <div className={styles["button-container"]}>
                    <input id="result-box" type="checkbox" className={styles["result-button"]} checked={game_Won} onChange={e => setGame_Won(!game_Won)}></input>
                </div>
            </div>
            <div className={styles["form-row"]}>
                <label htmlFor="date-box" className={styles["left-label"]}>Date</label>
                <input id="date-box" type="date" value={date} onChange={e => setDate(e.target.value)}></input>
            </div>
            <div className={styles["form-row"]}>
                <label htmlFor="comments-box" className={styles["left-label"]}>Comments</label>
                <input id="comments-box" type="text" value={comments} onChange={e => setComments(e.target.value)}></input>
            </div>
            <div className={styles["modal-submit-button"]}>
                <button type="submit">Submit</button>
                <button onClick={() => setViewModal(false)}>Cancel</button>
            </div>
        </form>
        </div>
    )
}

export default EditGameForm