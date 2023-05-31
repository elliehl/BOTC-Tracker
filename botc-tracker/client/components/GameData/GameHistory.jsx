import React, { useEffect, useState } from "react";
import styles from "../../styles/GameHistory.module.css"

const DisplayGames = () => {
    const [gameHistory, setGameHistory] = useState([])

    const getGames = async () => {
        const res = await fetch('http://localhost:9090/games')
        res.json().then((res) => setGameHistory(res.games))
    }

    useEffect(() => {
        getGames()
    }, [])

    return (
        <div className={styles['game-history-container']}>
        <>
        {gameHistory.map((game) => {
            return (<div key={game.id}>
                <h3>{game.comments}</h3>
                <h3>{game.starting_role_id}</h3>
            </div>
            )
        })
        }
        </>
        </div>
    )
}

export default DisplayGames