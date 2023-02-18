import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
    display: flex;
`;

export const NavigationLink = styled(NavLink)`
    position: relative;
    display: inline-block;
    text-decoration: none;
    font-weight: 700;
    padding: 12px;
    color: #fff;

    &.active {
        color: tomato;
    }

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
