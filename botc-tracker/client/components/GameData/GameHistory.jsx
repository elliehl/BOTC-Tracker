import React, { useEffect, useState } from "react";
import styles1 from "../../styles/GameHistory.module.css"
import styles from "../../styles/AddGameButton.module.css"
const Modal = require('react-modal')
import roleDataArray from "./roleData";
const roleList = roleDataArray.map((role) => role.name).sort()
const roleToSend = roleDataArray.map((role) => ({roleName: role.name, id: role.id}))

const DisplayGames = () => {
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

    const AddGameButton = () => {
    
    const [id, setId] = useState(null)
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
                setAlignment(false)
                setResult(false)
                setStartingRole('')
                setFinalRole('')
                setDate('')
                setComments('')
                setId(null)
            } else {
                console.log(jsonResponse)
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
                    <input id="alignment-box" type="checkbox" className={styles["alignment-toggle"]} checked={alignment} onChange={e => setAlignment(!alignment)}></input>
                    <label className="good-aligned" htmlFor="alignment-box">Good</label>
                    <label className="evil-aligned" htmlFor="alignment-box">Evil</label>
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


       const HandleUpdate = () => {
        const [viewEditModal, setViewEditModal] = useState(false)
        const [alignment, setAlignment] = useState(false)
        const [result, setResult] = useState(false)
        const [startingRole, setStartingRole] = useState('')
        const [finalRole, setFinalRole] = useState('')
        const [date, setDate] = useState('')
        const [comments, setComments] = useState('')

        const editData = async (id) => {    
            e.preventDefault()
            try {
            await fetch(`https://localhost:9090/${id}`, {
                method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    }, body: JSON.stringify({
                        alignment: alignment,
                        result: result,
                        startingRole: (roleToSend.filter((obj) => startingRole === obj.roleName))[0].id,
                        finalRole: (roleToSend.filter((obj) => finalRole === obj.roleName))[0].id,
                        date: date,
                        comments: comments
                    })
                })
            } catch (err) {
                console.log('error', err)
            }
        }

        return (
            <>
            <div className={styles["add-game-button-container"]}>
            <button onClick={() => setViewEditModal(true)}>Edit</button>
            </div>
            <Modal isOpen={viewEditModal} onRequestClose={() => setViewEditModal(false)} className={styles["modal"]}>
                <form action="/GameData" method="POST" id="overallForm" className={styles["form"]} onSubmit={editData}>
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
                        <button onClick={() => setViewEditModal(false)}>Cancel</button>
                    </div>
                </form>
            </Modal>
            </>
        ) 
       }
    
    useEffect(() => {
        getGames()
    }, [])

    return (
        <div className={styles1['game-history-container']}>
        <>
        <AddGameButton/>
        {console.log(gameHistory)}
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
                    return (
                        <tr key={game.id} className={styles1['history-list-item']}>
                            <td>{game.starting_Role}</td>
                            <td>{game.final_Role}</td>
                            <td>{game.is_Evil === false ? 'Good' : 'Evil'}</td>
                            <td>{game.game_Won === false ? 'Loss' : 'Win'}</td>
                            <td>{game.comments}</td>
                            <td>{game.date === null ? 'No Date' : new Date(game.date).toDateString()}</td>
                            <td><HandleUpdate /></td>
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