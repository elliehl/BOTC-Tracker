import React, {useState, useEffect} from "react";
import styles from "../../styles/CharacterTypeStats.module.css"

const CharacterTypeStats = () => {
    const [typeStats, setTypeStats] = useState([])

    const getTypeStats = async () => {
        const res = await fetch('https://localhost:7240/api/Stats/typeStats')
        res.json().then((res) => setTypeStats(res))
    }

    useEffect(() => {
        getTypeStats()
    }, [])

    return (
        <table className={styles['type-container']}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Games</th>
                    <th>Wins</th>
                    <th>Win Percentage</th>
                </tr>
            </thead>
        {typeStats.map((stats) => {
            return (
            <tbody key={stats.id} className={styles['type-list']}>
                <tr>
                    {<td>{stats.type}</td>}
                    {<td>{stats.games}</td>}
                    {<td>{stats.wins}</td>}
                    {<td>{Math.round((stats.wins / stats.games) * 100)}%</td>}
                </tr>
            </tbody>
            )
        })
        }
        </table>
    )
}

export default CharacterTypeStats