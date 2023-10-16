import React from "react"
import styles from '../styles/gameData.module.css'
import OverallStats from "../components/GameData/OverallStats"
import RoleStats from "../components/GameData/RoleStats"
import AlignmentStats from "../components/GameData/AlignmentStats"
import CharacterTypeStats from "../components/GameData/CharacterTypeStats"

const PlayerStats = () => {
    return (
        <div className={styles["stats-page"]}>
            <RoleStats />
            <div className={styles["stats-page-right"]}>
                <OverallStats />
                <AlignmentStats />
                <CharacterTypeStats />
             </div>
        </div>
    )
}

export default PlayerStats