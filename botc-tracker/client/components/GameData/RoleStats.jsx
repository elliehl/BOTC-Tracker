import {React, useState, useEffect} from "react";
import styles from "../../styles/RoleStats.module.css"

const RoleStats = () => {
    const [roleStats, setRoleStats] = useState([])
    const [sortedRoleStats, setSortedRoleStats] = useState([])
    const [isHighToLow, setIsHighToLow] = useState(true)
    const [currentDisplay, setCurrentDisplay] = useState('games')

    const getRoleStats = async () => {
        const res = await fetch('https://localhost:7240/api/Stats/roleStats')
        res.json().then((res) => setRoleStats(res.filter((stats) => stats.games !== 0)))
    }

    const winPercentageCalculator = () => {
        for (let i = 0; i < roleStats.length; i++) {
           roleStats[i].winPercentage = (Math.round((roleStats[i].wins / roleStats[i].games) * 100))
        }
    }

    const findTopFiveMostGamesPlayed = () => {
        winPercentageCalculator();
        let sortRanking = isHighToLow ? [...roleStats].sort((a, b) => b.games - a.games || b.wins - a.wins) :
                                        [...roleStats].sort((a, b) => a.games - b.games || b.wins - a.wins)
        let topFive = sortRanking.slice(0,5)
        return topFive
    } 

    const findTopFiveMostWins = () => {
        let sortRanking = isHighToLow ? [...roleStats].sort((a, b) => b.wins - a.wins || a.games - b.games) :
                                        [...roleStats].sort((a, b) => a.wins - b.wins || b.games - a.games)  
        let topFive = sortRanking.slice(0,5)
        return topFive
    }

    const findTopFiveHighestWinPercentage = () => {
        let sortRanking = isHighToLow ? [...roleStats].sort((a, b) => b.winPercentage - a.winPercentage || b.games - a.games) :
                                        [...roleStats].sort((a, b) => a.winPercentage - b.winPercentage || b.games - a.games)
        let topFive = sortRanking.slice(0,5)
        return topFive
    }

    let topGames = findTopFiveMostGamesPlayed(roleStats)
    let topWins = findTopFiveMostWins(roleStats)
    let topWinPercentage = findTopFiveHighestWinPercentage(roleStats)

    const selectChangeGames = () => {
        setSortedRoleStats(topGames)
        setCurrentDisplay('games')
    }

    const selectChangeWins = () => {
        setSortedRoleStats(topWins)
        setCurrentDisplay('wins')
    }

    const selectChangeWinPercentage = () => {
        setSortedRoleStats(topWinPercentage)
        setCurrentDisplay('winPercentage')
    }

    const onSelectChange = (e) => {
        e.target.value === 'games' ? selectChangeGames() : 
        e.target.value === 'wins' ? selectChangeWins() : selectChangeWinPercentage()
    }

    const onSelectChangeOrdering = (e) => {
        e.target.value === 'highest' ? setIsHighToLow(true) : setIsHighToLow(false)
    }

    useEffect(() => {
        getRoleStats();
    }, [])

    useEffect(() => {
        if(currentDisplay === 'wins') {
            setSortedRoleStats(topWins)
        } else if (currentDisplay === 'games') {
            setSortedRoleStats(topGames)
        } else if (currentDisplay === 'winPercentage') {
            setSortedRoleStats(topWinPercentage)
        }
    }, [isHighToLow])


    return (
        <div className={styles['role-stats-container']}>
        <div className={styles["sort-row"]}>
            <div>
                <h4 className={styles["sort-heading"]}>Sort by: </h4>
            </div>
            <div className={styles["sort-row-right"]}>
                <select defaultValue={'games'} onChange={onSelectChange} className={styles['select-button']}>
                    <option value={'games'}>Games</option>
                    <option value={'wins'}>Wins</option>
                    <option value={'winPercentage'}>Win %</option>
                </select>
                <select defaultValue={'highest'} onChange={onSelectChangeOrdering} className={styles['select-button']}>
                    <option value={'highest'}>Highest</option>
                    <option value={'lowest'}>Lowest</option>
                </select>
            </div>
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
            <tbody>
            {sortedRoleStats.length !== 0 ? sortedRoleStats.map((rank) => {
                return (

                        <tr>
                            <td>{rank.starting_Role}</td>
                            <td>{rank.games}</td>
                            <td>{rank.wins}</td>
                            <td>{rank.winPercentage}%</td>
                        </tr>
                    
                    )
                })
                : topGames.map((rank) => {
                    return (
                        <tr>
                            <td>{rank.starting_Role}</td>
                            <td>{rank.games}</td>
                            <td>{rank.wins}</td>
                            <td>{rank.winPercentage}%</td>
                        </tr>
                )
            })
        }
        </tbody>
        </table>
        </div>
    )
}

export default RoleStats