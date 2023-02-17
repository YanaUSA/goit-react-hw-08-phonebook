import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
    display: flex;
`;

export const NavigationLink = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    font-weight: 700;
    padding: 12px;
    color: #fff;

    active: {
        color: tomato;
    }
`;
