import React, {useState, useEffect} from "react";
import styles from "../../styles/AlignmentStats.module.css"

const AlignmentStats = () => {
    const [alignmentStats, setAlignmentStats] = useState([])

    const getAlignmentStats = async () => {
        const res = await fetch('https://localhost:7240/api/Stats/alignmentStats')
        res.json().then((res) => setAlignmentStats(res))
    }

    useEffect(() => {
        getAlignmentStats()
    }, [])

    return (
        <table className={styles['alignment-container']}>
        {alignmentStats.map((stats) => {
            return (
            <>
            <thead>
                <tr>
                    <th>{stats.is_Evil === false ? 'Good Games: ' : 'Evil Games: '}</th>
                    <th>{stats.is_Evil === false ? 'Good Wins: ' : 'Evil Wins: '}</th>
                    <th>{stats.is_Evil === false ? 'Good Win Percentage: ' : 'Evil Win Percentage: '}</th>
                </tr>
            </thead>    
            <tbody>
                <tr>
                <td>{stats.games}</td>
                <td>{stats.wins}</td>
                <td>{Math.round((stats.wins / stats.games) * 100)}%</td>
                </tr>
            </tbody>
            </>
            )
        })
        }
        </table>
    )
}

export default AlignmentStats