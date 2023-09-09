import { createContext, useEffect, useState } from "react";

export const GameContext = createContext();

const GameContextProvider = (props) => {
    const [gameHistory, setGameHistory] = useState([])

    useEffect(() => {
        getGames();
    }, [])

    const getGames = async () => {
        try {
        const res = await fetch('https://localhost:7240/api/Games')
        res.json().then((res) => setGameHistory(res))
        } catch(err) {
            console.log(err)
            throw err
        }
    }

    const addGame = async () => {
        try {
            let res = await fetch('https://localhost:7240/api/Games', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Is_Evil: alignment,
                    Game_Won: result,
                    Starting_Role: startingRole,
                    Final_Role: finalRole,
                    Date: date,
                    Comments: comments
                })
            });
            let jsonResponse = await res.json()

            if (res.status === 201) {
                console.log(jsonResponse)
                setGameHistory([...gameHistory, jsonResponse])
            } else {
                console.log(jsonResponse)
                console.log('Response not OK')
            }
        } catch (err) {
            console.log('error', err)
        }
    }

    const deleteGame = async (id) => {
        await fetch(`https://localhost:7240/${id}`, {
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
                setGameHistory([...gameHistory.filter((game) => game.id != id)])
            }
        }).catch((err) => console.log(err))
    }

    const updateGame = async (id, newlyUpdatedGame) => {
        const {is_Evil, game_Won, starting_Role, final_Role, comments, date} = newlyUpdatedGame;
        try {
            let res = await fetch(`https://localhost:7240/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id,
                    is_Evil: is_Evil,
                    game_Won: game_Won,
                    starting_Role: starting_Role,
                    final_Role: final_Role,
                    date: date,
                    comments: comments
                })
            });

            if (res.status === 200) {
                setGameHistory(gameHistory.map((game) => game.id === id ? newlyUpdatedGame : game))
            } else {
                console.log('Response not OK')
            }
        } catch (err) {
            console.log('error', err)
        }
    }

    return (
        <GameContext.Provider value={{gameHistory, getGames, addGame, deleteGame, updateGame}}>
            {props.children}
        </GameContext.Provider>
    )
}

export default GameContextProvider