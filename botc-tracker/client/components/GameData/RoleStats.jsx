import {React, useState, useEffect} from "react";
import styles from "../../styles/RoleStats.module.css"

const RoleStats = () => {
    const [roleStats, setRoleStats] = useState([])
    const [sortedRoleStats, setSortedRoleStats] = useState([])

    const getRoleStats = async () => {
        const res = await fetch('https://localhost:7240/api/Stats/roleStats')
        res.json().then((res) => setRoleStats(res))
    }

    const winPercentageCalculator = () => {
        for (let i = 0; i < roleStats.length; i++) {
           roleStats[i].winPercentage = (Math.round((roleStats[i].wins / roleStats[i].games) * 100))
        }
    }

    const findTopFiveMostGamesPlayed = () => {
        let sortRanking = [...roleStats].sort((a, b) => b.games - a.games)
        let topFive = sortRanking.slice(0,5)
        return topFive
    } 

    const findTopFiveMostWins = () => {
        let sortRanking = [...roleStats].sort((a, b) => b.wins - a.wins || b.games - a.games)
        let topFive = sortRanking.slice(0,5)
        return topFive
    }

    const findTopFiveHighestWinPercentage = () => {
        winPercentageCalculator();
        let sortRanking = [...roleStats].sort((a, b) => b.winPercentage - a.winPercentage || b.games - a.games)
        let topFive = sortRanking.slice(0,5)
        return topFive
    }

    let topGames = findTopFiveMostGamesPlayed(roleStats)
    let topWins = findTopFiveMostWins(roleStats)
    let topWinPercentage = findTopFiveHighestWinPercentage(roleStats)

    const onSelectChange = (e) => {
        e.target.value === 'games' ? setSortedRoleStats(topGames) : 
        e.target.value === 'wins' ? setSortedRoleStats(topWins) : setSortedRoleStats(topWinPercentage)
    }

    useEffect(() => {
        getRoleStats();
        winPercentageCalculator();
    }, [])

    return (
        <div className={styles['role-stats-container']}>
        <div className={styles["sort-row"]}>
        <h4 className={styles["sort-heading"]}>Sort by: </h4>
        <select defaultValue={'games'} onChange={onSelectChange} className={styles['select-button']}>
            <option value={'games'}>Games</option>
            <option value={'wins'}>Wins</option>
            <option value={'winPercentage'}>Win %</option>
        </select>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Role</th>
                    <th>Games</th>
                    <th>Wins</th>
                    <th>Win %</th>
                </tr>
            </thead>
            {sortedRoleStats.length !== 0 ? sortedRoleStats.map((rank) => {
                return (
                    <tbody>
                        <tr>
                            <td>{rank.starting_Role}</td>
                            <td>{rank.games}</td>
                            <td>{rank.wins}</td>
                            <td>{rank.winPercentage}%</td>
                        </tr>
                    </tbody>
                )
            })
            : topGames.map((rank) => {
                return (
                    <tbody>
                        <tr>
                            <td>{rank.starting_Role}</td>
                            <td>{rank.games}</td>
                            <td>{rank.wins}</td>
                            <td>{rank.winPercentage}%</td>
                        </tr>
                    </tbody>
                )
            })
            }
        </table>
        </div>
    )
}

export default RoleStats