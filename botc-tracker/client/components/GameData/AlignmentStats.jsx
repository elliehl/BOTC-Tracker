import React, {useState, useEffect} from "react";
import styles from "../../styles/AlignmentStats.module.css"

const AlignmentStats = () => {
    const [alignmentStats, setAlignmentStats] = useState([])

    const getAlignmentStats = async () => {
        const res = await fetch('http://localhost:9090/alignment')
        res.json().then((res) => setAlignmentStats(res.stats))
    }

    useEffect(() => {
        getAlignmentStats()
    }, [])

    return (
        <div className={styles['alignment-container']}>
        <>
        {alignmentStats.map((stats) => {
            return (<div key={stats.id} className={styles['alignment-list']}>
                <>
                <h3>{stats.is_evil === 0 ? 'Good Wins: ' : 'Evil Wins: '} {stats.wins}</h3>
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