import React, { useContext } from "react"
import {GameContext} from "../contexts/GameContext"
import styles from '../styles/gameData.module.css'
import OverallStats from "../components/GameData/OverallStats"
import RoleStats from "../components/GameData/RoleStats"
import AlignmentStats from "../components/GameData/AlignmentStats"
import CharacterTypeStats from "../components/GameData/CharacterTypeStats"

const PlayerStats = () => {

    const { isLoggedIn } = useContext(GameContext)

    return (
        <div>
        {isLoggedIn ? (
        <div className={styles["stats-page"]}>
            <RoleStats />
            <div className={styles["stats-page-right"]}>
                <OverallStats />
                <AlignmentStats />
                <CharacterTypeStats />
             </div>
        </div>
        ) : 
        <div className={styles["main-page"]}>
            <h3>Please log in</h3>
        </div>
        }
        </div>
    )
}

export default PlayerStats