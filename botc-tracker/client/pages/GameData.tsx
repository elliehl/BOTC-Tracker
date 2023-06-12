import React from "react"
import styles from '../styles/gameData.module.css'
import AlignmentStats from "../components/GameData/AlignmentStats"
import CharacterTypeStats from "../components/GameData/CharacterTypeStats"
import DisplayGames from "../components/GameData/GameHistory"
import RoleStats from "../components/GameData/RoleStats"
import "../styles/AlignmentStats.module.css"
import AddGameButton from "../components/GameData/AddGameButton"

const GameData = () => {

    return (
        <>
        <AddGameButton />
        <div className={styles["main-page"]}>
            <AlignmentStats />
            <CharacterTypeStats />
            {/* <RoleStats /> */}
        </div>
        <div className={styles["main-page"]}>
        <DisplayGames />
        </div>
        </>
    )
}

export default GameData