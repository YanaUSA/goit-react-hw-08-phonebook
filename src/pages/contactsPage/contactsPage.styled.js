import styled from 'styled-components';
import { Container } from 'components/AppCommon.styled';

export const ContactsPageContainer = styled(Container)`
    display: flex;
    height: 100%;
`;

export const ContactsFormContainer = styled.div`
    padding-top: ${props => props.theme.spacing(2)};
    padding-right: ${props => props.theme.spacing(3)};
`;

export const ContactsListContainer = styled.div`
    padding-top: ${props => props.theme.spacing(2)};
    padding-left: ${props => props.theme.spacing(3)};
`;

export const ContactsPageTitle = styled.h1`
    display: block;
    font-size: 30px;
    font-weight: 600;
    margin: 20px;
    color: inherit;
`;

export const ContactsSectionTitle = styled.h2`
    display: block;
    margin: 20px;
    font-size: 30px;
    font-weight: 600;
    color: inherit;
`;
