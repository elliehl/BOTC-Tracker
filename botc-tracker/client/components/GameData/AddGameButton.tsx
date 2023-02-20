import React, { useState } from "react";
import styles from "../../styles/AddGameButton.module.css"
const Modal = require('react-modal')
import roleDataArray from "./roleData";

const roleList = roleDataArray.map((role) => role.name).sort()

const AddGameButton = () => {

    const [viewModal, setViewModal] = useState(false)

    return (
        <>
        <div className={styles["add-game-button-container"]}>
        <button className={styles["add-game-button"]} onClick={() => setViewModal(true)}>Add Game</button>
        </div>
        <Modal isOpen={viewModal} onRequestClose={() => setViewModal(false)} className={styles["modal"]}>
            <form action="/GameData" method="post" className={styles["form"]}>
                <div>
                    <label>Starting Role</label>
                    <input list="roles" name="Starting Role" required={true}></input>
                    <datalist id="roles">
                        {roleList.map((roleName) => <option>{roleName}</option>)}
                    </datalist>
                </div>
                <div>
                    <label>Final Role</label>
                    <input list="roles" name="Final Role" required={true}></input>
                    <datalist id="roles">
                        {roleList.map((roleName) => <option>{roleName}</option>)}
                    </datalist>
                </div>
                <div className={styles["alignment-container"]}>
                    <label>Alignment</label>
                    <div className={styles["button-container"]}>
                        <input type="checkbox" className={styles["alignment-button"]} value="Good"></input>
                    </div>
                </div>
                <div className={styles["result-container"]}>
                    <label>Result</label>
                    <div className={styles["button-container"]}>
                        <input type="checkbox" className={styles["result-button"]} value="Win"></input>
                    </div>
                </div>
                <div>
                    <label>Date</label>
                    <input type="date"></input>
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