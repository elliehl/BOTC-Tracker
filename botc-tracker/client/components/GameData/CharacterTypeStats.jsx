import React, {useState, useEffect} from "react";
import styles from "../../styles/CharacterTypeStats.module.css"

const CharacterTypeStats = () => {
    const [typeStats, setTypeStats] = useState([])

    const getTypeStats = async () => {
        const res = await fetch('http://localhost:9090/type')
        res.json().then((res) => setTypeStats(res.stats))
    }

    useEffect(() => {
        getTypeStats()
    }, [])

    return (
        <div className={styles['type-container']}>
        <>
        <div>
            <h3>Type</h3>
            <h3>Games</h3>
            <h3>Wins</h3>
            <h3>Win %</h3>
            </div>
        {typeStats.map((stats) => {
            return (<div key={stats.id} className={styles['type-list']}>
                <>
                {<h3>{stats.type}</h3>}
                {<h3>{stats.games}</h3>}
                {<h3>{stats.wins}</h3>}
                {<h3>{Math.round((stats.wins / stats.games) * 100)}%</h3>}
                </>
            </div>
            )
        })
        }
        </>
        </div>
    )
}

export default CharacterTypeStats