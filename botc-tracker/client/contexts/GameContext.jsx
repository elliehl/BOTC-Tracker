import { createContext, useState } from "react";

export const GameContext = createContext();

const GameContextProvider = (props) => {
    const [gameHistory, setGameHistory] = useState([])

    const getGames = async () => {
        try {
        const res = await fetch('https://localhost:7240/api/Games')
        res.json().then((res) => setGameHistory(res))
        } catch(err) {
            console.log(err)
            throw err
        }
    }

    const addGame = async (e) => {
        e.preventDefault()
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

    return (
        <GameContext.Provider value={{getGames, addGame, deleteGame}}>
            {props.children}
        </GameContext.Provider>
    )
}

export default GameContextProvider