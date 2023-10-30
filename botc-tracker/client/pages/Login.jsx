import React from "react";
import styles from "../styles/Login.module.css"

function contact () {
    return (
        <div className={styles['container']}>
            <form className={styles['form']}>
                <div>
                    {/* <label>Username</label> */}
                    <input type="text" placeholder="Username"></input>
                </div>
                <div>
                    {/* <label>Password</label> */}
                    <input type="text" placeholder="Password"></input>
                </div>
                <button>Log in</button>
                <button>Sign up</button>
            </form>
        </div>
    )
}

export default contact;