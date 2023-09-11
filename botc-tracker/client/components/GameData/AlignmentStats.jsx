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
        <div className={styles['alignment-container']}>
        <>
        {alignmentStats.map((stats) => {
            return (<div key={stats.id}>
                <>
                {<h3>{stats.is_Evil === false ? 'Good Games: ' : 'Evil Games: '} {stats.games}</h3>}
                {<h3>{stats.is_Evil === false ? 'Good Wins: ' : 'Evil Wins: '} {stats.wins}</h3>}
                {<h3>{stats.is_Evil === false ? 'Good Win Percentage: ' : 'Evil Win Percentage: '} {Math.round((stats.wins / stats.games) * 100)}%</h3>}
                </>
            </div>
            )
        })
        }
        </>
        </div>
    )
}

export default AlignmentStats