import styles from "../../styles/AddGameButton.module.css"
import { useState } from "react"


const AddGameForm = () => {

    const [id, setId] = useState(null)
    const [viewModal, setViewModal] = useState(false)
    const [alignment, setAlignment] = useState(false)
    const [result, setResult] = useState(false)
    const [startingRole, setStartingRole] = useState('')
    const [finalRole, setFinalRole] = useState('')
    const [date, setDate] = useState('')
    const [comments, setComments] = useState('')

    return (
        <form action="/GameData" method="POST" id="overallForm" className={styles["form"]} onSubmit={handleSubmit}>
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

export default AddGameForm