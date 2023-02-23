import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from 'components/AppCommon.styled';

import { MdContactPhone } from 'react-icons/md';

export const PageContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* height: 100%; */
    margin: auto;
`;

export const PhonebookIcon = styled(MdContactPhone)`
    color: ${props => props.theme.colors.neonBlue};
    width: 100px;
    height: 100px;
    margin: ${props => props.theme.spacing(16)} 0;

    /* margin: auto 0; */
`;

export const HomePageTitle = styled.h1`
    font-weight: ${props => props.theme.fontWeights.xl};
    font-size: 32px;
    text-align: center;
    margin-bottom: ${props => props.theme.spacing(7)};
`;

export const HomePageCall = styled.p`
    display: flex;
    justify-content: center;
    text-align: center;
    font-weight: ${props => props.theme.fontWeights.m};
    font-size: ${props => props.theme.fontSizes.l};
`;

export const HomePageCallLink = styled(Link)`
    display: flex;
    justify-content: center;
    margin: 0 ${props => props.theme.spacing(2)};
    font-weight: ${props => props.theme.fontWeights.m};
    font-size: ${props => props.theme.fontSizes.l};
    color: ${props => props.theme.colors.accent};
`;
