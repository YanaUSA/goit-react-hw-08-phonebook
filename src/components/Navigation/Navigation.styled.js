import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
    margin-right: auto;
`;

export const NavigationLink = styled(NavLink)`
    ${({ theme }) => `
    position: relative;
    display: inline-block;
    text-decoration: none;
    font-weight: ${theme.fontWeights.xl};
    padding: ${theme.spacing(2)};
    line-height: 1.14;
    color: ${theme.colors.white};

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

    &:not(:last-child) {
        margin-right: 10px;
    }
`;
