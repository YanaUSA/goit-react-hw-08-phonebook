import styled from 'styled-components';
import { Container } from '../AppCommon.styled';

export const Header = styled.header`
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    z-index: 1100;
    border-bottom: 1px solid #ececec;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const HeaderContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: ${props => props.theme.spacing(2)};
    padding-bottom: ${props => props.theme.spacing(2)};
`;
