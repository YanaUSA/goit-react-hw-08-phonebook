import styled from 'styled-components';

export const ItemWrapper = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const UserContact = styled.p`
    margin: 0;
    padding: 0;
    font-size: ${props => props.theme.fontSizes.m};
    font-weight: ${props => props.theme.fontWeights.norm};
`;

export const UserDeleteBtn = styled.button`
    display: inline-block;
    width: fix-content;
    text-align: center;
    text-transform: capitalize;
    padding: ${props => props.theme.spacing(2)};
    color: ${props => props.theme.colors.grey};
    font-weight: ${props => props.theme.fontWeights.l};
    font-size: ${props => props.theme.fontSizes.sm};
    background: ${props => props.theme.colors.greyBtnBgrColor};
    border: ${props => props.theme.spacing(0.7)} solid transparent;
    border-radius: 50px;
    transition: ${props => props.theme.transition.btnHoverTime} ease-in-out;
    cursor: pointer;
    margin-left: ${props => props.theme.spacing(3)};

    :hover {
        box-shadow: 0 0 5px 0 ${props => props.theme.colors.neonCrimson} inset,
            0 0 10px 2px ${props => props.theme.colors.neonCrimson};
        border: ${props => props.theme.spacing(0.7)} solid
            ${props => props.theme.colors.neonCrimson};
    }
`;
