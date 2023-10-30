import React, { useState } from "react";
import styles from "../styles/Login.module.css"

function Login () {
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
                <button>Sign up</button>
            </form>
        </div>
    )
}

export default Login;