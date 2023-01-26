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
        <Modal isOpen={viewModal} onRequestClose={() => setViewModal(false)}>
            <form>
                <div>
                    <label>Starting Role</label>
                    <input list="roles" required={true}></input>
                    <datalist id="roles">
                        {roleList.map((roleName) => <option>{roleName}</option>)}
                    </datalist>
                </div>
                <div>
                    <label>Final Role</label>
                    <input list="roles" required={true}></input>
                    <datalist id="roles">
                        {roleList.map((roleName) => <option>{roleName}</option>)}
                    </datalist>
                </div>
                <div className={styles["alignment-container"]}>
                    <label>Alignment</label>
                    <div className={styles["alignment-button-container"]}>
                        <input type="button" className={styles["choice-button-left"]} value="Good"></input>
                        <input type="button" className={styles["choice-button-right"]} value="Evil"></input>
                    </div>
                </div>
                <div className={styles["result-container"]}>
                    <label>Result</label>
                    <div className={styles["alignment-button-container"]}>
                        <input type="button" className={styles["choice-button-left"]} value="Win"></input>
                        <input type="button" className={styles["choice-button-right"]} value="Loss"></input>
                    </div>
                </div>
                <div>
                    <label>Date</label>
                    <input type="date"></input>
                </div>
            </form>
            <div>
                <button type="submit">Submit</button>
                <button onClick={() => setViewModal(false)}>Cancel</button>
            </div>
        </Modal>
        </>
    )
}

export default AddGameButton