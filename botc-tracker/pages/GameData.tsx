import React from "react"
import styles from '../styles/gameData.module.css'

interface Game {
    readonly id: number
    startingRole: string
    finalRole: string
    isOnWinningTeam: boolean
    isGoodAligned: boolean
    date?: Date
}

// TEST DATA
const gameRecords: Game[] = [
    {
    id: 1,
    startingRole: 'Witch',
    finalRole: 'Witch',
    isOnWinningTeam: true,
    isGoodAligned: false,
    date: new Date('2022-12-25')
    }, 
    {
    id: 2,
    startingRole: 'Vortox',
    finalRole: 'Snake Charmer',
    isOnWinningTeam: true,
    isGoodAligned: true,
    date: new Date('2022-12-25')
    },
    {
    id: 3,
    startingRole: 'Artist',
    finalRole: 'Artist',
    isOnWinningTeam: true,
    isGoodAligned: true,
    date: new Date('2022-12-26')
    },
    {
    id: 4,
    startingRole: 'Sage',
    finalRole: 'Sage',
    isOnWinningTeam: false,
    isGoodAligned: true,
    date: new Date('2022-12-27')
    },
    {
    id: 5,
    startingRole: 'Artist',
    finalRole: 'Artist',
    isOnWinningTeam: false,
    isGoodAligned: true,
    date: new Date('2022-12-27')
    },

]

const GameData = () => {
    return (
        <>
        <div className={styles['role-stats-container']}>
        {gameRecords.map((game) => {
           return (
            <div className={styles['role-list-item']}>
           <h3 key={game.id} >{game.finalRole}</h3>
           <h3 key={game.id}>{game.isOnWinningTeam ? 'Win' : 'Loss'}</h3>
           </div>
           )
          })}
        </div>
        </>
    )
}

export default GameData