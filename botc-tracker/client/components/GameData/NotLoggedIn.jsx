import styles from "../../styles/NotLoggedIn.module.css"

const NotLoggedIn = () => {
    return (
        <div className={styles["container"]}>
            <h2>You are not currently logged in</h2>
            <p><a href="/Login">Log in</a> to view your stats</p>
            <p>Or sign up to get started!</p>
        </div>
    )
}

export default NotLoggedIn