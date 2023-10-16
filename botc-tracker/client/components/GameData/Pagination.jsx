import styles from "../../styles/Pagination.module.css"
import { useContext } from "react"
import { GameContext } from "../../contexts/GameContext"

const Pagination = ({gamesPerPage, setCurrentPage, firstGameOnPage, lastGameOnPage, currentPage}) => {
    const {gameHistory} = useContext(GameContext)
    
    const pages = []

    for (let i = 1; i <= Math.ceil(gameHistory.length / gamesPerPage); i++) {
            pages.push(i)
        }

    const isLastPage = (lastGameOnPage > gameHistory.length)

    return (
        <div className={styles["page-container"]}>
            {isLastPage ? 
            <div>Displaying {firstGameOnPage + 1}-{gameHistory.length} of {gameHistory.length} total games</div>
            : <div>Displaying {firstGameOnPage + 1}-{lastGameOnPage} of {gameHistory.length} total games</div>
            }
            <ul className={styles["page-list-container"]}>
                <li className={styles[`${currentPage === 1 ? 'page-item-disabled' : 'page-item'}`]}><a href="#" onClick={() => setCurrentPage((prev) => prev === 1 ? prev : prev - 1)}>Previous</a></li>
                {pages.map((pageNumber) => {
                    return <li className={styles[`${pageNumber === currentPage ? 'page-item-current' : 'page-item'}`]}><a href="#" onClick={() => setCurrentPage(pageNumber)}>{pageNumber}</a></li>
                })}
                <li className={styles[`${isLastPage ? 'page-item-disabled' : 'page-item'}`]}><a href="#" onClick={() => setCurrentPage(isLastPage ? currentPage : currentPage + 1)}>Next</a></li>
            </ul>
        </div>
    )
}

export default Pagination