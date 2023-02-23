import styled from 'styled-components';
import { Container } from 'components/AppCommon.styled';

export const PageContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const LoginFormTitle = styled.h1`
    font-size: 28px;
    font-weight: ${props => props.theme.fontWeights.xl};
    margin-top: ${props => props.theme.spacing(12)};
    margin-bottom: ${props => props.theme.spacing(5)};
    text-transform: capitalize;
`;
