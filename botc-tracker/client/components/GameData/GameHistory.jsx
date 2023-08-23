import React, { useEffect, useState } from "react";
import styles1 from "../../styles/GameHistory.module.css"
import styles from "../../styles/AddGameButton.module.css"
const Modal = require('react-modal')
import roleDataArray from "./roleData";
const roleList = roleDataArray.map((role) => role.name).sort()
const roleToSend = roleDataArray.map((role) => ({roleName: role.name, id: role.id}))

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

    const AddGameButton = () => {
    
    const [viewModal, setViewModal] = useState(false)
    const [alignment, setAlignment] = useState(false)
    const [result, setResult] = useState(false)
    const [startingRole, setStartingRole] = useState('')
    const [finalRole, setFinalRole] = useState('')
    const [date, setDate] = useState('')
    const [comments, setComments] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let res = await fetch('http://localhost:9090/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    alignment: alignment,
                    result: result,
                    startingRole: (roleToSend.filter((obj) => startingRole === obj.roleName))[0].id,
                    finalRole: (roleToSend.filter((obj) => finalRole === obj.roleName))[0].id,
                    date: date,
                    comments: comments
                })
            });
            let jsonResponse = await res.json()
            // the 2 lines below are needed to actually show the roles for the node backend, otherwise it shows as blank because
            // it's initially being given the id number not the role string
            jsonResponse.starting_role = startingRole
            jsonResponse.final_role = finalRole
            if (res.status === 201) {
                console.log(jsonResponse)
                setGameHistory([...gameHistory, jsonResponse])
                setAlignment(false)
                setResult(false)
                setStartingRole('')
                setFinalRole('')
                setDate('')
                setComments('')
            } else {
                console.log('Response not OK')
            }
        } catch (err) {
            console.log('error', err)
        }}
    return (
        <>
        <div className={styles["add-game-button-container"]}>
        <button className={styles["add-game-button"]} onClick={() => setViewModal(true)}>Add Game</button>
        </div>
        <Modal isOpen={viewModal} onRequestClose={() => setViewModal(false)} className={styles["modal"]}>
            <form action="/GameData" method="POST" id="overallForm" className={styles["form"]} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="starting-role-box">Starting Role</label>
                    <input id="starting-role-box" list="roles" name="Starting Role" required={true} value={startingRole} onChange={(e) => setStartingRole(e.target.value)}></input>
                    <datalist id="roles">
                        {roleList.map((roleName) => <option>{roleName}</option>)}
                    </datalist>
                </div>
                <div>
                    <label htmlFor="final-role-box">Final Role</label>
                    <input id="final-role-box" list="roles" name="Final Role" required={true} value={finalRole} onChange={(e) => setFinalRole(e.target.value)}></input>
                    <datalist id="roles">
                        {roleList.map((roleName) => <option>{roleName}</option>)}
                    </datalist>
                </div>
                <div className={styles["alignment-container"]}>
                    <label htmlFor="alignment-box">Alignment</label>
                    <div className={styles["button-container"]}>
                        <input id="alignment-box" type="checkbox" className={styles["alignment-button"]} checked={alignment} onChange={e => setAlignment(!alignment)}></input>
                    </div>
                </div>
                <div className={styles["result-container"]}>
                    <label htmlFor="result-box">Result</label>
                    <div className={styles["button-container"]}>
                        <input id="result-box" type="checkbox" className={styles["result-button"]} checked={result} onChange={e => setResult(!result)}></input>
                    </div>
                </div>
                <div>
                    <label htmlFor="date-box">Date</label>
                    <input id="date-box" type="date" value={date} onChange={e => setDate(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="comments-box">Comments</label>
                    <input id="comments-box" type="text" value={comments} onChange={e => setComments(e.target.value)}></input>
                </div>
                <div className="bottom-modal-buttons">
                    <button type="submit">Submit</button>
                    <button onClick={() => setViewModal(false)}>Cancel</button>
                </div>
            </form>
        </Modal>
        </>
    )
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
                setGameHistory([...gameHistory.filter((game) => game.id != id)])
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
        <div className={styles1['game-history-container']}>
        <>
        <AddGameButton/>
        {gameHistory.length === 0 && 'No Game History'}
        <table>
            <thead>
                <tr>
                    <th>Starting Role</th>
                    <th>Final Role</th>
                    <th>Alignment</th>
                    <th>Result</th>
                    <th>Comments</th>
                    <th>Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {gameHistory.map((game) => {
                    console.log(game)
                    return (
                        <tr key={game.id} className={styles1['history-list-item']}>
                            <td>{game.starting_role}</td>
                            <td>{game.final_role}</td>
                            <td>{game.is_evil === 0 || game.alignment === false ? 'Good' : 'Evil'}</td>
                            <td>{game.game_won === 0 || game.result === false ? 'Loss' : 'Win'}</td>
                            <td>{game.comments}</td>
                            <td>{game.date === null ? 'No Date' : new Date(game.date).toDateString()}</td>
                            <td><button onClick={() => handleUpdate(game.id)} type="button">Edit</button></td>
                            <td><button onClick={() => handleDelete(game.id)} type="button">Delete</button></td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
        </>
        </div>
    )
}

export default DisplayGames