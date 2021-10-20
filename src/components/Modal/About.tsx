import React from 'react';
import styles from './About.module.css';

function About({ handleSetModal }: {handleSetModal: Function}) {
    return (
        <div className={styles['modal-background']} onClick={() => handleSetModal()}>
            <div className={styles['modal-content']}>
                <h2>Welcome to Lost Languages!</h2>
                <p>
                    The purpose of this app is to give the user some practice translating between languages.
                    A random image is displayed
                </p>
                <p>
                    This app was developed as part of my curriculum at Flatiron School.
                    It was originally built with vanilla JavaScript, but I rebuilt it using React and TypeScript.
                </p>
                <p>
                    Click anywhere to close.
                </p>
            </div>
        </div>
    );
}

export default About;
