import styles from "../../styles/Pagination.module.css"
import { useContext } from "react"
import { GameContext } from "../../contexts/GameContext"



const Pagination = () => {
    const {gameHistory} = useContext(GameContext)

    return (
        <div className={styles["page-container"]}>
            <div>Displaying x of {gameHistory.length} total games</div>
            <ul className={styles["page-list-container"]}>
                <li className={styles["page-item"]}><a href="#">Previous</a></li>
                <li className={styles["page-item"]}><a href="#">1</a></li>
                <li className={styles["page-item"]}><a href="#">2</a></li>
                <li className={styles["page-item"]}><a href="#">3</a></li>
                <li className={styles["page-item"]}><a href="#">4</a></li>
                <li className={styles["page-item"]}><a href="#">5</a></li>
                <li className={styles["page-item"]}><a href="#">Next</a></li>
            </ul>
        </div>
    )
}

export default Pagination