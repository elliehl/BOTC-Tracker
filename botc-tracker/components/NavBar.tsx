import React from "react";
import styles from '../styles/NavBar.module.css'
import Link from "next/link";

const NavBar = () => {
    return (
        <div className={styles["navbar-container"]}>
            <div className={styles["navbar-left"]}>
                <Link href="/GameData" className={styles["page-links"]}>Player Stats</Link>
                <h4>Storyteller Stats</h4>
            </div>
            <div className={styles["navbar-right"]}>
                <Link href="/about" className={styles["page-links"]}>About</Link>
                <h4>Contact</h4>
            </div>
        </div>
    )
}

export default NavBar