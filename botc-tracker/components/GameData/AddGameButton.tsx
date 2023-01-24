import React, { useState } from "react";
import styles from "../../styles/AddGameButton.module.css"
const Modal = require('react-modal')

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
                    <input></input>
                </div>
                <div>
                    <label>Final Role</label>
                    <input></input>
                </div>
                <div>
                    <label>Alignment</label>
                    <input type="button" className={styles["alignment-button"]} value="Good"></input>
                    <input type="button" className={styles["alignment-button"]} value="Evil"></input>
                </div>
                <div>
                    <label>Result</label>
                    <input type="button" className={styles["alignment-button"]} value="Win"></input>
                    <input type="button" className={styles["alignment-button"]} value="Loss"></input>
                </div>
                <div>
                    <label>Date</label>
                    <input type="date"></input>
                </div>
            </form>
            <div>
                <button>Submit</button>
                <button onClick={() => setViewModal(false)}>Cancel</button>
            </div>
        </Modal>
        </>
    )
}

export default AddGameButton