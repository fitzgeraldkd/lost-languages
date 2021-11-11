import styled from 'styled-components';

function Modal({ handleSetModal, children }: {handleSetModal: Function, children: JSX.Element}) {
    return (
        <>
            <ModalBackground onClick={() => handleSetModal()}>
            </ModalBackground>
            <ModalContent>
                {children}
            </ModalContent>
        </>
    );
}

export default Modal;

const ModalBackground = styled.div`
    background-color: rgba(0, 0, 0, 0.514);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
`;

const ModalContent = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    max-width: 600px;
    background-color: white;
    border: 1px solid black;
    border-radius: 2px;
    box-shadow: 0 0 5px;
    padding: 10px;
    text-align: justify;
    z-index: 10;
`;