import { useContext } from "react"
import styles from "../../styles/NotLoggedIn.module.css"
import { GameContext } from "../../contexts/GameContext"
const Modal = require("react-modal")
import CreateAccountModal from "./CreateAccountModal"

const NotLoggedIn = () => {

    const { viewCreateAccountModal, setViewCreateAccountModal } = useContext(GameContext)

    return (
        <div className={styles["container"]}>
            <h2>You are not currently logged in</h2>
            <p><a href="/Login">Log in</a> to view your stats</p>
            <p>Or <button className={styles["sign-up-button"]} onClick={() => setViewCreateAccountModal(true)}>sign up </button> to get started!</p>

            <Modal isOpen={viewCreateAccountModal} onRequestClose={() => setViewCreateAccountModal(false)} className={styles["modal"]}>
                <CreateAccountModal setViewCreateAccountModal={setViewCreateAccountModal}/>
            </Modal>
        </div>
    )
}

export default NotLoggedIn