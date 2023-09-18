import React, {useState, useEffect} from "react";
import styles from "../../styles/OverallStats.module.css"

const OverallStats = () => {
    const [overallStats, setOverallStats] = useState([])

    const getOverallStats = async () => {
        const res = await fetch('https://localhost:7240/api/Stats')
        res.json().then((res) => setOverallStats(res))
    }

    useEffect(() => {
        getOverallStats()
    }, [])

    return (
        <table className={styles['overall-stats-container']}>
            <thead>
                <tr>
                    <th>Overall Games: </th>
                    <th>Overall Wins: </th>
                    <th>Overall Win %: </th>
                </tr>
            </thead>
        {overallStats.map((stats) => {
            return (
                <tbody key={stats.id}>
                    <tr>
                        <td>{stats.games}</td>
                        <td>{stats.wins}</td>
                        <td>{Math.round((stats.wins / stats.games) * 100)}%</td>
                    </tr>
                </tbody>
            )
        })
        }
        </table>
    )
}

export default OverallStats