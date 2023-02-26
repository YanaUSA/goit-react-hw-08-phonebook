import styled from 'styled-components';

export const EditFormStyle = styled.form`
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid ${props => props.theme.colors.grey};

    padding: ${props => props.theme.spacing(4)};
    /* margin-top: ${props => props.theme.spacing(5)}; */
    border-radius: ${props => props.theme.spacing(3)};
    box-shadow: 0px 0px 3px 1px rgba(211, 211, 211, 0.5);
    margin: 0 auto;
`;

export const EditFormLabel = styled.label`
    width: 200px;
    font-size: ${props => props.theme.fontSizes.m};
    font-weight: ${props => props.theme.fontWeights.m};
    margin-bottom: ${props => props.theme.spacing(4)};
    text-transform: capitalize;
    color: ${props => props.theme.colors.black}; ;
`;

export const EditFormInput = styled.input`
    display: block;
    width: 100%;
    margin-top: ${props => props.theme.spacing(1)};
    outline: none;
    border: 1px solid grey;
    border-radius: ${props => props.theme.spacing(1)};
    padding: 5px 10px;
    box-shadow: 0 0 2px 0.2px #d3d3d3;
    font-weight: ${props => props.theme.fontWeights.norm};
    font-size: ${props => props.theme.fontSizes.sm};
`;

export const EditFormBtnList = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
`;

export const EditFormButton = styled.button`
    width: 70px;
    display: inline-block;
    padding: ${props => props.theme.spacing(2)};
    text-align: center;
    color: ${props => props.theme.colors.white};
    text-transform: uppercase;
    font-weight: ${props => props.theme.fontWeights.l};
    font-size: ${props => props.theme.fontSizes.sm};
    background-color: ${props => props.theme.colors.darkBgrColor};
    cursor: pointer;

    border: ${props => props.theme.spacing(0.7)} solid
        ${props => props.theme.colors.grey};
    border-radius: 50px;
    transition: ${props => props.theme.transition.btnHoverTime} ease-in-out;

    :hover {
        box-shadow: 0 0 5px 0 ${props => props.theme.colors.neonBlue} inset,
            0 0 10px 2px ${props => props.theme.colors.neonBlue};
        border: ${props => props.theme.spacing(0.7)} solid
            ${props => props.theme.colors.neonBlue};
        color: ${props => props.theme.colors.neonBlue};
    }
`;
