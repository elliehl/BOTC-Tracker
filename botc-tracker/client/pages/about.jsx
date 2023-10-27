import React from "react";
import styles from '../styles/About.module.css';

const About = () => {
    return (
        <div className={styles['faq-container']}>
            <div className={styles['inner-container']}>
            <div className={styles['question-container']}>
                <input type="checkbox" id="question1" name="faq-accordion" className={styles['input']}></input>
                <label htmlFor="question1" className={styles['question-label']}>Can I track homebrew characters?</label>
                <div className={styles['answer']}>
                    <p>This app only supports characters from the official game.</p>
                </div>
            </div>
            <div className={styles['question-container']}>
                <input type="checkbox" id="question2" name="faq-accordion" className={styles['input']}></input>
                <label htmlFor="question2" className={styles['question-label']}>Why is Lil' Monsta not in the character list?</label>
                <div className={styles['answer']}>
                    <p>As players cannot be dealt the Lil' Monsta token, a player cannot technically <em>play as</em> Lil' Monsta.</p>
                </div>
            </div>
            <div className={styles['question-container']}>
                <input type="checkbox" id="question3" name="faq-accordion" className={styles['input']}></input>
                <label htmlFor="question3" className={styles['question-label']}>Can I track other parts of my games, such as script or storyteller?</label>
                <div className={styles['answer']}>
                    <p>This is not possible at this current time.</p>
                </div>
            </div>
            <div className={styles['question-container']}>
                <input type="checkbox" id="question4" name="faq-accordion" className={styles['input']}></input>
                <label htmlFor="question4" className={styles['question-label']}>How do I provide feedback?</label>
                <div className={styles['answer']}>
                    <p>Feel free to send any feedback and suggestions to <a href="https://github.com/elliehl"><strong>elliehl</strong></a> on Github.</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default About