import styled from 'styled-components';

export const Form = styled.form`
    /* width: fit-content; */
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid ${props => props.theme.colors.grey};

    padding: ${props => props.theme.spacing(4)};
    margin-top: ${props => props.theme.spacing(5)};
    border-radius: ${props => props.theme.spacing(3)};
    box-shadow: 0px 0px 3px 1px rgba(211, 211, 211, 0.5);
`;

export const FormLabel = styled.label`
    width: 240px;
    font-size: ${props => props.theme.fontSizes.m};
    font-weight: ${props => props.theme.fontWeights.m};
    margin-bottom: ${props => props.theme.spacing(4)};
    text-transform: capitalize;
`;

export const FormInput = styled.input`
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

export const FormButton = styled.button`
    width: fix-content;
    padding: ${props => props.theme.spacing(2)};
    text-align: center;
    color: ${props => props.theme.colors.black};
    text-transform: uppercase;
    font-weight: ${props => props.theme.fontWeights.l};
    font-size: ${props => props.theme.fontSizes.sm};
    cursor: pointer;
    display: inline-block;

    background-color: transparent;
    border: ${props => props.theme.spacing(0.7)} solid
        ${props => props.theme.colors.neonBlue};
    border-radius: 50px;
    transition: ${props => props.theme.transition.btnHoverTime} ease-in-out;
    color: ${props => props.theme.colors.neonBlue};
    margin-bottom: ${props => props.theme.spacing(2)};

    :hover {
        box-shadow: 0 0 5px 0 ${props => props.theme.colors.neonBlue} inset,
            0 0 10px 2px ${props => props.theme.colors.neonBlue};
        border: ${props => props.theme.spacing(0.7)} solid
            ${props => props.theme.colors.neonBlue};
    }
`;
