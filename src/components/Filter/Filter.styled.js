import styled from 'styled-components';

export const FilterBox = styled.div`
    margin-top: ${props => props.theme.spacing(5)};
    margin-bottom: ${props => props.theme.spacing(7)};

    border: 1px solid ${props => props.theme.colors.grey};
    padding: ${props => props.theme.spacing(4)};
    border-radius: ${props => props.theme.spacing(3)};
    box-shadow: 0px 0px 3px 1px rgba(211, 211, 211, 0.5);
    width: 300px;
`;

export const FilterLabel = styled.label`
    font-size: ${props => props.theme.fontSizes.m};
    font-weight: ${props => props.theme.fontWeights.m};
`;

export const FilterInput = styled.input`
    display: block;
    width: 100%;
    margin-top: ${props => props.theme.spacing(1)};
    outline: none;
    border: none;
    border-radius: ${props => props.theme.spacing(1)};
    padding: 5px 10px;
    box-shadow: 0 0 2px 0.2px #d3d3d3;
    font-weight: ${props => props.theme.fontWeights.norm};
    font-size: ${props => props.theme.fontSizes.sm};
`;
