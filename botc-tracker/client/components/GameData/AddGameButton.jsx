import React, { useState } from "react";
import styles from "../../styles/AddGameButton.module.css"
const Modal = require('react-modal')
import roleDataArray from "./roleData";
const roleList = roleDataArray.map((role) => role.name).sort()
const roleToSend = roleDataArray.map((role) => ({roleName: role.name, id: role.id}))


const AddGameButton = () => {

    const [viewModal, setViewModal] = useState(false)
    const [alignment, setAlignment] = useState(false)
    const [result, setResult] = useState(false)
    const [startingRole, setStartingRole] = useState('')
    const [finalRole, setFinalRole] = useState('')
    const [date, setDate] = useState('')
    const [comments, setComments] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let res = await fetch('http://localhost:9090/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    alignment: alignment,
                    result: result,
                    startingRole: (roleToSend.filter((obj) => startingRole === obj.roleName))[0].id,
                    finalRole: (roleToSend.filter((obj) => finalRole === obj.roleName))[0].id,
                    date: date,
                    comments: comments
                })
            });
            let jsonResponse = await res.json()
            if (res.status === 200) {
                console.log(jsonResponse)
                setAlignment(false)
                setResult(false)
                setStartingRole('')
                setFinalRole('')
                setDate('')
                setComments('')
            } else {
                console.log('Response not OK')
            }
        } catch (err) {
            console.log('error', err)
        }
    }

    return (
        <>
        <div className={styles["add-game-button-container"]}>
        <button className={styles["add-game-button"]} onClick={() => setViewModal(true)}>Add Game</button>
        </div>
        <Modal isOpen={viewModal} onRequestClose={() => setViewModal(false)} className={styles["modal"]}>
            <form action="/GameData" method="POST" id="overallForm" className={styles["form"]} onSubmit={handleSubmit}>
                <div>
                    <label>Starting Role</label>
                    <input list="roles" name="Starting Role" required={true} value={startingRole} onChange={(e) => setStartingRole(e.target.value)}></input>
                    <datalist id="roles">
                        {roleList.map((roleName) => <option>{roleName}</option>)}
                    </datalist>
                </div>
                <div>
                    <label>Final Role</label>
                    <input list="roles" name="Final Role" required={true} value={finalRole} onChange={(e) => setFinalRole(e.target.value)}></input>
                    <datalist id="roles">
                        {roleList.map((roleName) => <option>{roleName}</option>)}
                    </datalist>
                </div>
                <div className={styles["alignment-container"]}>
                    <label>Alignment</label>
                    <div className={styles["button-container"]}>
                        <input type="checkbox" className={styles["alignment-button"]} checked={alignment} onChange={e => setAlignment(!alignment)}></input>
                    </div>
                </div>
                <div className={styles["result-container"]}>
                    <label>Result</label>
                    <div className={styles["button-container"]}>
                        <input type="checkbox" className={styles["result-button"]} checked={result} onChange={e => setResult(!result)}></input>
                    </div>
                </div>
                <div>
                    <label>Date</label>
                    <input type="date" value={date} onChange={e => setDate(e.target.value)}></input>
                </div>
                <div>
                    <label>Comments</label>
                    <input type="text" value={comments} onChange={e => setComments(e.target.value)}></input>
                </div>
                <div className="bottom-modal-buttons">
                    <button type="submit">Submit</button>
                    <button onClick={() => setViewModal(false)}>Cancel</button>
                </div>
            </form>
        </Modal>
        </>
    )
}

export default AddGameButton