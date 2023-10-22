import React from "react";
import styles from '../styles/About.module.css';

const About = () => {
    return (
        <div className={styles['faq-container']}>
            <br/>
            <div className={styles['question-container']}>
            <p>Can I track homebrew characters?</p>
            <p>This app only supports characters from the official game.</p>
            </div>
            <br/>
            <div className={styles['question-container']}>
            <p>Why is Lil' Monsta not in the character list?</p>
            <p>As players cannot be dealt the Lil' Monsta token, a player cannot technically <em>play as</em> Lil' Monsta.</p>
            </div>
            <br/>
            <div className={styles['question-container']}>
            <p>Can I add track other parts of my games, such as script or storyteller?</p>
            <p>This is not possible at this current time.</p>
            </div>
            <br/>
            <div className={styles['question-container']}>
            <p>How do I provide feedback?</p>
            <p>Feel free to send any feedback and suggestions to <a href="https://github.com/elliehl"><strong>elliehl</strong></a> on Github.</p>
            </div>
            <br/>
        </div>
    )
}

export default About