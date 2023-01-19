import React from "react";
import styles from "../../styles/AddGameButton.module.css"

const AddGameButton = () => {
    return (
        <>
        <div className={styles["button-container"]}>
        <button className={styles["button"]}>Add Game</button>
        </div>
        </>
    )
}

export default AddGameButton