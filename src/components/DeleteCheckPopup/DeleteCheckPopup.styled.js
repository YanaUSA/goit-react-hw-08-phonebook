import styled from 'styled-components';
// import { Button } from 'components/Button/Button';

export const DeleteCheckText = styled.p`
    font-size: ${props => props.theme.fontSizes.l};
    font-weight: ${props => props.theme.fontWeights.xl};
    color: ${props => props.theme.colors.black};
    text-align: center;

    padding: 0 20px;
    margin-top: 10px;
    margin-bottom: 30px;
`;

export const DeleteCheckBtnList = styled.ul`
    display: flex;
    justify-content: space-around;
`;

export const DeleteCheckButton = styled.button`
    /* width: fix-content; */
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
