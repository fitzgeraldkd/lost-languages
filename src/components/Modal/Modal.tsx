import React from 'react';
import styles from './Modal.module.css';

function Modal({ handleSetModal, children }: {handleSetModal: Function, children: JSX.Element}) {
    return (
        <>
            <div className={styles['modal-background']} onClick={() => handleSetModal()}>
            </div>
                <div className={styles['modal-content']}>
                    {children}
                </div>
        </>
    );
}

export default Modal;
