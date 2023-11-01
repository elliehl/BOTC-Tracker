import { useContext } from "react"
import styles from "../../styles/Login.module.css"
import { GameContext } from "../../contexts/GameContext"

const CreateAccountModal = ({setViewCreateAccountModal}) => {
    
    const { abel } = useContext(GameContext)

    return (
        <div className={abel.className}>
            <div className={styles['container']}>
                <form className={styles['form']}>
                    <div className={styles["signup-close-icon"]}>
                        <button onClick={() => setViewCreateAccountModal(false)}>X</button>
                    </div>
                    <div className={styles["signup-top-row"]}>
                        <h2>Sign Up</h2>
                    </div>
                    <div>
                        <input type="text" placeholder="Username"></input>
                    </div>
                    <div>
                        <input type="text" placeholder="Password"></input>
                    </div>
                    <div className={styles["signup-bottom-buttons"]}>
                        <button type="submit">Create account</button>
                        <button onClick={() => setViewCreateAccountModal(false)}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateAccountModal