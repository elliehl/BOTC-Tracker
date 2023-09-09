import { createContext, useState } from "react";

export const GameContext = createContext();

const GameContextProvider = (props) => {
    const [gameHistory, setGameHistory] = useState([])

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

    return (
        <GameContext.Provider value={{addGame}}>
            {props.children}
        </GameContext.Provider>
    )
}

export default GameContextProvider