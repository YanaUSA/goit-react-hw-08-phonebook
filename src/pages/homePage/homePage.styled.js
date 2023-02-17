import styled from 'styled-components';

export const HomePageContainer = styled.div`
    min-height: calc(100vh - 50px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HomePageTextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const HomePageTitle = styled.h1`
    font-weight: 700;
    font-size: 48;
    text-align: center;
    margin-bottom: 20px;
`;

export const HomePageCall = styled.p`
    font-weight: 500;
    font-size: 48;
    text-align: center;
`;

export const HomePageCallSpan = styled.span`
    font-weight: 500;
    font-size: 48;
    color: tomato;
`;
