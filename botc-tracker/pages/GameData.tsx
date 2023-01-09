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

interface Characters {
    readonly id: number
    name: string
    isGoodAligned: boolean
    gamesPlayed: number
    totalWins: number
    winPercentage: number
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

const characters: Characters[] = [
    {
     id: 1,
     name: 'Artist',
     isGoodAligned: true,
     gamesPlayed: 10,
     totalWins: 6,
     winPercentage: 60   
    },
    {
     id: 2,
     name: 'Clockmaker',
     isGoodAligned: true,
     gamesPlayed: 20,
     totalWins: 10,
     winPercentage: 50   
    },
    {
     id: 3,
     name: 'Witch',
     isGoodAligned: false,
     gamesPlayed: 5,
     totalWins: 4,
     winPercentage: 80   
    },
    {
     id: 4,
     name: 'Vortox',
     isGoodAligned: false,
     gamesPlayed: 8,
     totalWins: 2,
     winPercentage: 25   
    },
    {
     id: 5,
     name: 'Klutz',
     isGoodAligned: true,
     gamesPlayed: 2,
     totalWins: 0,
     winPercentage: 0   
    },
    {
     id: 6,
     name: 'Philosopher',
     isGoodAligned: true,
     gamesPlayed: 11,
     totalWins: 11,
     winPercentage: 100   
    },
]

function findMostGamesPlayed (arr: Characters[]) {
    let top = {
        id: -1,
        name: 'Test1',
        isGoodAligned: true,
        gamesPlayed: -Infinity,
        totalWins: -Infinity,
        winPercentage: -Infinity   
       }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].gamesPlayed > top.gamesPlayed) {
            top = arr[i]
        } 
    }
    return top
}


const GameData = () => {
    let topData = findMostGamesPlayed(characters)

    return (
        <>
        <div className={styles['game-history-container']}>
        {gameRecords.map((game) => {
           return (
            <div className={styles['history-list-item']}>
           <h3 key={game.id} >{game.finalRole}</h3>
           <h3 key={game.id}>{game.isOnWinningTeam ? 'Win' : 'Loss'}</h3>
           </div>
           )
          })}
        </div>
        <div className={styles['role-stats-container']}>
          <h3>{topData.name}</h3>
          <h3>{topData.gamesPlayed}</h3>
          <h3>{topData.winPercentage + '%'}</h3>
        </div>
        </>
    )
}

export default GameData