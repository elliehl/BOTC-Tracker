import React from "react";
import styles from "../../styles/CharacterTypeStats.module.css"

interface CharacterTypes {
    readonly id: number
    name: string
    isGoodAligned: boolean
    gamesPlayed: number
    totalWins: number
    winPercentage: number
}

const characterTypes: CharacterTypes[] = [
    {
    id: 1,
    name: 'Townsfolk',
    isGoodAligned: true,
    gamesPlayed: 78,
    totalWins: 39,
    winPercentage: 50   
    },
    {
    id: 2,
    name: 'Outsider',
    isGoodAligned: true,
    gamesPlayed: 15,
    totalWins: 9,
    winPercentage: 60   
    },
    {
    id: 3,
    name: 'Minion',
    isGoodAligned: false,
    gamesPlayed: 40,
    totalWins: 30,
    winPercentage: 75   
    },
    {
    id: 4,
    name: 'Demon',
    isGoodAligned: false,
    gamesPlayed: 12,
    totalWins: 3,
    winPercentage: 25   
    },
    {
    id: 5,
    name: 'Traveller',
    isGoodAligned: true,
    gamesPlayed: 1,
    totalWins: 1,
    winPercentage: 100   
    },
]

const CharacterTypeStats = () => {
    return (
        <div className={styles['type-stats-container']}>
            {characterTypes.map((type) => {
                return (
                    <div className="type-list">
                        <h3>{type.name}</h3>
                        <h3>{type.gamesPlayed}</h3>
                        <h3>{type.totalWins}</h3>
                        <h3>{type.winPercentage + '%'}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default CharacterTypeStats