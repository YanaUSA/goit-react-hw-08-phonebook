import styled from 'styled-components';
import { Container } from 'components/AppCommon.styled';

export const ContactsPageContainer = styled(Container)`
    @media screen and (max-width: 767px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    display: flex;
    justify-content: center;

    height: 100%;
`;

export const ContactsFormContainer = styled.div`
    @media screen and (min-width: 768px) {
        margin-right: ${props => props.theme.spacing(16)};
    }
    width: 300px;
    padding-top: ${props => props.theme.spacing(2)};
    display: flex;
    justify-content: center;
`;

export const ContactsListContainer = styled.div`
    width: 300px;
    padding-top: ${props => props.theme.spacing(2)};
`;

export const ContactsPageTitle = styled.h1`
    /////////styles for visible title ///////////
    /* display: block;
    font-size: 30px;
    font-weight: 600; */
    /* margin: 20px;
    color: inherit; */

    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
`;

export const ContactsSectionTitle = styled.h2`
    /////////styles for visible title ///////////
    /* display: block;
    margin: 20px;
    font-size: 30px;
    font-weight: 600;
    color: inherit; */

    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
`;
