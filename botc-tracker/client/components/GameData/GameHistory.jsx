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
            return (<div key={game.id} className={styles['history-list-item']}>
                <h3>{game.starting_role}</h3>
                <h3>{game.is_evil === 0 ? 'Good' : 'Evil'}</h3>
                <h3>{game.game_won === 0 ? 'Loss' : 'Win'}</h3>
                <h3>{game.comments}</h3>
            </div>
            )
        })
        }
        </>
        </div>
    )
}

export default DisplayGames