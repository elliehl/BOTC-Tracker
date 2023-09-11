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
        <div className={styles['overall-stats-container']}>
        <>
        {overallStats.map((stats) => {
            return (<div key={stats.id}>
                <>
                {<h3>{'Overall Games: '} {stats.games}</h3>}
                {<h3>{'Overall Wins: '} {stats.wins}</h3>}
                {<h3>{'Overall Win Percentage: '} {Math.round((stats.wins / stats.games) * 100)}%</h3>}
                </>
            </div>
            )
        })
        }
        </>
        </div>
    )
}

export default OverallStats