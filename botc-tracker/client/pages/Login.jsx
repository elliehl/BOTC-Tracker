import React, { useContext, useState } from "react";
import styles from "../styles/Login.module.css"
const Modal = require("react-modal")
import CreateAccountModal from "../components/GameData/CreateAccountModal"
import { GameContext } from "../contexts/GameContext";

const Login = () => {

    const { viewCreateAccountModal, setViewCreateAccountModal } = useContext(GameContext)

    return (
        <div className={styles['container']}>
            <form className={styles['form']}>
                <div>
                    <input type="text" placeholder="Username"></input>
                </div>
                <div>
                    <input type="text" placeholder="Password"></input>
                </div>
                <button>Log in</button>
                <button className={styles["last-button"]} type="button" onClick={() => setViewCreateAccountModal(true)}>Sign up</button>
            </form>

            <Modal isOpen={viewCreateAccountModal} onRequestClose={() => setViewCreateAccountModal(false)} className={styles["modal"]}>
                <CreateAccountModal setViewCreateAccountModal={setViewCreateAccountModal}/>
            </Modal>
        </div>

    )
}

export default Login;