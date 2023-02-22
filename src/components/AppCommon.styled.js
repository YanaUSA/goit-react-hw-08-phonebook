import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    padding: 0 ${props => props.theme.spacing(4)};
    padding-bottom: ${props => props.theme.spacing(6)};

    @media screen and (min-width: 480px) {
        width: 480px;
    }

    @media screen and (min-width: 768px) {
        width: 768px;
    }

    @media screen and (min-width: 1200px) {
        width: 1200px;
    }
`;
