import styled from 'styled-components';

export const UserMenuContainer = styled.div`
    display: flex;
    align-items: center;

    /* outline: 2px solid blue; */
`;

export const UserMenuImage = styled.img`
    margin-right: ${props => props.theme.spacing(4)};
    border-radius: 50%;
`;

export const UserInfoBox = styled.div`
    display: flex;
    flex-direction: column;
`;

export const UserWelcomeText = styled.span`
    font-size: ${props => props.theme.fontSizes.sm};
    font-weight: ${props => props.theme.fontWeights.norm};
    margin-right: 10px;
`;

export const UserEmail = styled(UserWelcomeText)`
    color: ${props => props.theme.colors.grey};
`;

export const LogoutBtn = styled.p`
    ${({ theme }) => `
    position: relative;
    font-weight: ${theme.fontWeights.xl};
    line-height: 1.14;
    letter-spacing: 0.02em;
    color: ${theme.colors.white};
    cursor: pointer;
    padding: ${theme.spacing(2)};
    }

    &.active {
        color: ${theme.colors.accent}};
    `}

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

        transition: transform ${props => props.theme.transition.time};
    }

    &:hover {
        &:after {
            transform: scaleX(1);
        }
    }
`;
