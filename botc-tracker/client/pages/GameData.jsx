import React from "react"
import styles from '../styles/gameData.module.css'
import DisplayGames from "../components/GameData/GameHistory"
import "../styles/AlignmentStats.module.css"

const GameData = () => {

    return (
        <>
        <div className={styles["main-page"]}>
        <DisplayGames />
        </div>
        </>
    )
}

export default GameData