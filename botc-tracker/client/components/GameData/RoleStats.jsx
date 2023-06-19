import {React, useState, useEffect} from "react";
import styles from "../../styles/RoleStats.module.css"

const RoleStats = () => {
    const [roleStats, setRoleStats] = useState([])

    const getRoleStats = async () => {
        const res = await fetch('http://localhost:9090/roles')
        res.json().then((res) => setRoleStats(res.stats))
    }

    useEffect(() => {
        getRoleStats()
    }, [])

    const findTopFiveMostGamesPlayed = () => {
        let sortRanking = roleStats.sort((a, b) => b.games - a.games)
        console.log(sortRanking, 'sort ranking')
        let topFive = sortRanking.slice(0,5)
        return topFive
    } 

    let topData = findTopFiveMostGamesPlayed(roleStats)

    return (
        <div className={styles['role-stats-container']}>
            <div className={styles["role-stats-titles"]}>
            <h3>Role</h3>
            <h3>Games</h3>
            <h3>Wins</h3>
            <h3>Win %</h3>
            </div>
            {topData.map((rank) => {
                return (
                    <div className={styles["played-list"]}>
                        <h3 className={styles["starting-role-item"]}>{rank.starting_role}</h3>
                        <h3 className={styles["games-item"]}>{rank.games}</h3>
                        <h3>{rank.wins}</h3>
                        <h3>{Math.round((rank.wins / rank.games) * 100)}%</h3>
                    </div>
                )
            })
            }
        </div>
    )
}

export default RoleStats