import { useContext } from "react"
import { GameContext } from "../../contexts/GameContext"
import styles from '../../styles/ConfirmDeleteModal.module.css'
import { Abel } from '@next/font/google'

const abel = Abel({ weight: '400', subsets: ['latin'] })

const ConfirmDeleteModal = ({game, setViewConfirmDeleteModal}) => {

    const {deleteGame} = useContext(GameContext)

    return (
        <div className={abel.className}>
        <div className={styles['container']}>
            <div className={styles['close-icon']}>
                <button onClick={() => setViewConfirmDeleteModal(false)}>X</button>
            </div>
            <div className={styles['modal-item']}>
                <h3>Are you sure you want to delete?</h3>
            </div>
            <div className={styles['button-container']}>
                <button onClick={() => deleteGame(game.id)} className={styles['delete-button']}>Delete</button>
                <button onClick={() => setViewConfirmDeleteModal(false)} className={styles['cancel-button']}>Cancel</button>
            </div>
        </div>
        </div>
    )
}

export default ConfirmDeleteModal