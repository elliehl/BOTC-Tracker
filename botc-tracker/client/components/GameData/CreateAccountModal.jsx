import styles from "../../styles/AddGameButton.module.css"

const CreateAccountModal = ({setViewCreateAccountModal}) => {

    return (
        <div className={styles["form"]}>
            <div>
                <h2>Sign Up</h2>
                <button>X</button>
            </div>
            <div>
                <input type="text" placeholder="Username"></input>
            </div>
            <div>
                <input type="text" placeholder="Password"></input>
            </div>
            <div>
                <button type="submit">Create account</button>
                <button onClick={() => setViewCreateAccountModal(false)}>Cancel</button>
            </div>
        </div>
    )
}

export default CreateAccountModal