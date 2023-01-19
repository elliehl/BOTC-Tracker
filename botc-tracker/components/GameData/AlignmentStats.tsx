import React from "react";
import styles from "../../styles/AlignmentStats.module.css"

interface Alignment {
    readonly id: number
    alignmentName: string
    gamesPlayed: number
    gamesWon: number
    winPercentage: number
}

const alignmentStats: Alignment[] = [
    {
    id: 1,
    alignmentName: 'Good',
    gamesPlayed: 100,
    gamesWon: 75,
    winPercentage: 75,
    },
    {
    id: 2,
    alignmentName: 'Evil',
    gamesPlayed: 60,
    gamesWon: 48,
    winPercentage: 80,
    }
]

const AlignmentStats = () => {
    return (
        <div className={styles['alignment-container']}>
            {alignmentStats.map((alignment) => {
                return (
                    <div className="alignment-list">
                        <h3>Alignment: {alignment.alignmentName}</h3>
                        <h3>Games Played: {alignment.gamesPlayed}</h3>
                        <h3>Games Won: {alignment.gamesWon}</h3>
                        <h3>Win Percentage: {alignment.winPercentage + '%'}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default AlignmentStats