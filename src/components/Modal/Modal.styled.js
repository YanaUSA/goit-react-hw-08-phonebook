import styled from 'styled-components';

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
`;
export const ModalWindow = styled.div`
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    width: 30%;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.5);
    z-index: 15;
`;
