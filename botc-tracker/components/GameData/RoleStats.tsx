import React from "react";
import styles from "../../styles/RoleStats.module.css"

interface Characters {
    readonly id: number
    name: string
    isGoodAligned: boolean
    gamesPlayed: number
    totalWins: number
    winPercentage: number
}

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
     gamesPlayed: 9,
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

function findTopFiveMostGamesPlayed (arr: Characters[]) {
    let sortRanking = characters.sort((a, b) => b.gamesPlayed - a.gamesPlayed)
    let topFive = sortRanking.slice(0,5)
    return topFive
} 

const RoleStats = () => {
    let topData = findTopFiveMostGamesPlayed(characters)

    return (
        <div className={styles['role-stats-container']}>
            <div className="role-stats-titles">
            <h3>Role</h3>
            <h3>Games</h3>
            <h3>Wins</h3>
            <h3>Win %</h3>
            </div>
            {topData.map((rank) => {
                return (
                    <div className="played-list">
                        <h3>{rank.name}</h3>
                        <h3>{rank.gamesPlayed}</h3>
                        <h3>{rank.totalWins}</h3>
                        <h3>{rank.winPercentage + '%'}</h3>
                    </div>
                )
            })
            }
        </div>
    )
}

export default RoleStats