import React, { useEffect, useState } from "react";
import styles from "../../styles/GameHistory.module.css"

const DisplayGames = () => {
    const [gameHistory, setGameHistory] = useState([])
    const [selectedGame, setSelectedGame] = useState({alignment: false, result: false, startingRole: '', finalRole: '', date: '', comments: ''})

    const getGames = async () => {
        try {
        const res = await fetch('http://localhost:9090/games')
        res.json().then((res) => setGameHistory(res.games))
        } catch(err) {
            console.log(err)
            throw err
        }
    }

    const handleDelete = async (id) => {
        await fetch(`http://localhost:9090/games/${id}`, {
            method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
        }).then((res) => {
            if (!res.ok) {
                console.log(res.err)
                throw err
            } else {
                console.log('Success')
                getGames()
            }
        }).catch((err) => console.log(err))
    }

    const handleUpdate = async (id) => {
        await fetch(`http://localhost:9090/games/${id}`, {
            method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({
                    alignment: selectedGame.alignment,
                    result: selectedGame.result,
                    startingRole: (roleToSend.filter((obj) => selectedGame.startingRole === obj.roleName))[0].id,
                    finalRole: (roleToSend.filter((obj) => selectedGame.finalRole === obj.roleName))[0].id,
                    date: selectedGame.date,
                    comments: selectedGame.comments
                })
            })
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
                <h3>{game.final_role}</h3>
                <h3>{game.is_evil === 0 ? 'Good' : 'Evil'}</h3>
                <h3>{game.game_won === 0 ? 'Loss' : 'Win'}</h3>
                <h3>{game.comments}</h3>
                <h3>{game.date === null ? 'No Date' : new Date(game.date).toDateString()}</h3>
                <button onClick={() => handleUpdate(game.id)} type="button">Edit</button>
                <button onClick={() => handleDelete(game.id)} type="button">Delete</button>
            </div>
            )
        })
        }
        </>
        </div>
    )
}

export default DisplayGames