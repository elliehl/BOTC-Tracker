import React, { useContext, useEffect } from "react"
import {GameContext} from "../contexts/GameContext"
import styles from '../styles/gameData.module.css'
import OverallStats from "../components/GameData/OverallStats"
import RoleStats from "../components/GameData/RoleStats"
import AlignmentStats from "../components/GameData/AlignmentStats"
import CharacterTypeStats from "../components/GameData/CharacterTypeStats"
import NotLoggedIn from "../components/GameData/NotLoggedIn"

const PlayerStats = () => {

    const { isLoggedIn, isLoading } = useContext(GameContext)

    if(isLoading) {
        return <h2 className={styles["stats-page"]}>Loading...</h2>
    }

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
            <NotLoggedIn />
        </div>
        }
        </div>
    )
}

export default PlayerStats