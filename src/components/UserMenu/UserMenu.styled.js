import styled from 'styled-components';

export const UserMenuContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const UserMenuImage = styled.img`
    margin-right: 16px;
    border-radius: 50%;
`;

export const UserWelcomeText = styled.p`
    font-weight: 500;
    margin-right: 20px;
`;

export const LogoutBtn = styled.p`
    position: relative;
    font-weight: 700;
    cursor: pointer;
    padding: 12px;

    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 3px;
        transform: scaleX(0);
        background-color: #ccdbe05d;

        transition: transform 0.4s;
    }

    &:hover {
        &:after {
            transform: scaleX(1);
        }
    }
`;
