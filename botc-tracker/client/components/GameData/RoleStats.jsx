import {React, useState, useEffect} from "react";
import styles from "../../styles/RoleStats.module.css"

const RoleStats = () => {
    const [roleStats, setRoleStats] = useState([])

    const getRoleStats = async () => {
        const res = await fetch('https://localhost:7240/api/Stats/roleStats')
        res.json().then((res) => setRoleStats(res))
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
        <table className={styles['role-stats-container']}>
            <thead>
                <tr>
                    <th>Role</th>
                    <th>Games</th>
                    <th>Wins</th>
                    <th>Win %</th>
                </tr>
            </thead>
            {topData.map((rank) => {
                return (
                    <tbody>
                        <tr>
                            <td>{rank.starting_Role}</td>
                            <td>{rank.games}</td>
                            <td>{rank.wins}</td>
                            <td>{Math.round((rank.wins / rank.games) * 100)}%</td>
                        </tr>
                    </tbody>
                )
            })
            }
        </table>
    )
}

export default RoleStats