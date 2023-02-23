import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../AppCommon.styled';

export const FooterBox = styled.footer`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: ${props => props.theme.colors.darkBgrColor};

    border-top: 1px solid #ececec;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px -4px 5px 0px rgba(0, 0, 0, 0.14),
        0px -1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const FooterContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: ${props => props.theme.spacing(1)};
    padding-bottom: ${props => props.theme.spacing(1)};
`;

export const RightsReservedSpan = styled.span`
    ${({ theme }) => `
    font-weight: ${theme.fontWeights.norm};
    font-size: ${theme.fontSizes.sm};
    line-height: 1.14;
    letter-spacing: 0.02em;
    padding: ${theme.spacing(1)} 0;
    color: ${theme.colors.grey}`}
`;

export const SocialLink = styled(Link)`
    ${({ theme }) => `
    font-weight: ${theme.fontWeights.norm};
    font-size: ${theme.fontSizes.sm};
    line-height: 1.14;
    letter-spacing: 0.02em;
    color: ${theme.colors.grey};
    margin-left: 4px;
    padding: ${theme.spacing(1)} 0;    

    &:hover {
        color: ${theme.colors.accent};
    `}
`;
