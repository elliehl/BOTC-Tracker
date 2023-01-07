import React from "react";
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
    return (
        <div className={styles["navbar-container"]}>
            <div className={styles["navbar-left"]}>
                <h4>Player Stats</h4>
                <h4>Storyteller Stats</h4>
            </div>
            <div className={styles["navbar-right"]}>
                <h4>About</h4>
                <h4>Contact</h4>
            </div>
        </div>
    )
}

export default NavBar