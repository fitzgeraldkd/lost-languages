import React from 'react';
import Modal from './Modal';

function About({ handleSetModal }: {handleSetModal: Function}) {
    return (
        <Modal handleSetModal={handleSetModal}>
            <>
                <h2>Welcome to Lost Languages!</h2>
                <p>
                    The purpose of this app is to give the user some practice translating between languages.
                    A random image is displayed for you to write a description about in your first language.
                    Then you take your sentence and translate it to a language of your choice.
                    The translation is added to the page where other people can vote on the translation, or add their own!
                </p>
                <p>
                    This app was developed as part of my curriculum at Flatiron School.
                    It was originally built with vanilla JavaScript, but this has been rebuilt using React and TypeScript.
                </p>
                <p>
                    The <a href='https://picsum.photos/' target='_blank' rel='noreferrer'>Lorem Picsum API</a> is used to grab random images to display.
                </p>
                <p>
                    Checkout the <a href='https://github.com/fitzgeraldkd/lost-languages' target='_blank' rel='noreferrer'>source code on my GitHub</a>!
                </p>
            </>
        </Modal>
    );
}

export default About;
