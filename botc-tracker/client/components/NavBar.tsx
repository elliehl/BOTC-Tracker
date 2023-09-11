import React from "react";
import styles from '../styles/NavBar.module.css'
import Link from "next/link";

const NavBar = () => {
    return (
        <div className={styles["navbar-container"]}>
            <div className={styles["navbar-left"]}>
                <Link href="/GameData" className={styles["page-links"]}>Game History</Link>
                <Link href="/PlayerStats" className={styles["page-links"]}>Player Stats</Link>
            </div>
            <div className={styles["navbar-right"]}>
                <Link href="/about" className={styles["page-links"]}>About</Link>
                <Link href="/contact" className={styles["page-links"]}>Contact</Link>
            </div>
        </div>
    )
}

export default NavBar