import { createContext, useEffect, useState } from "react";
import { Abel } from '@next/font/google'

export const GameContext = createContext();
const abel = Abel({ weight: '400', subsets: ['latin'] })

const GameContextProvider = (props) => {
    const [gameHistory, setGameHistory] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [viewCreateAccountModal, setViewCreateAccountModal] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getGames();
    }, [])

    const getGames = async () => {
        try {
        const res = await fetch('https://localhost:7240/api/Games')
        res.json().then((res) => {
            setGameHistory(res)
            setIsLoading(false)
        })
        } catch(err) {
            console.log(err)
            throw err
        }
    }

    const addGame = async (addedGame) => {
        const {is_Evil, game_Won, starting_Role, final_Role, comments, date} = addedGame;
        try {
            let res = await fetch('https://localhost:7240/api/Games', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Is_Evil: is_Evil,
                    Game_Won: game_Won,
                    Starting_Role: starting_Role,
                    Final_Role: final_Role,
                    Date: date !== "" ? date : "0001-01-01T00:00:00",
                    Comments: comments
                })
            });

            let jsonResponse = await res.json();

            if (res.status === 201) {
                setGameHistory([...gameHistory, jsonResponse])
            } else {
                console.log(addedGame, 'added game')
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
                    date: date !== "" ? date : "0001-01-01T00:00:00",
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

        // const addNewUser = async () => {
        //     try {
        //         let res = await fetch(`https://localhost:7240/api/Users`, {
        //             method: 'POST',
        //             headers: {
        //             'Content-Type': 'application/json'
        //             },
        //             body: JSON.stringify({
        //                 
        //             })  
        //     }, 
        //     )} catch (err) {
        //         console.log('error', err)
        //     }
        // }
    }

    return (
        <GameContext.Provider value={{gameHistory, getGames, addGame, deleteGame, updateGame, isLoggedIn, setIsLoggedIn, isLoading, setIsLoading, abel, viewCreateAccountModal, setViewCreateAccountModal}}>
            {props.children}
        </GameContext.Provider>
    )
}

export default GameContextProvider