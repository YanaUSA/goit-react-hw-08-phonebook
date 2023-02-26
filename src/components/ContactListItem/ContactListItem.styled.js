import styled from 'styled-components';
import { ImBin } from 'react-icons/im';
import { BiEdit } from 'react-icons/bi';

export const ItemWrapperLi = styled.li`
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
`;

export const NameWrapper = styled.div`
    display: flex;
`;

export const UserContact = styled.p`
    display: flex;
    align-items: center;

    word-break: break-all;
    white-space: pre-wrap;

    margin: 0;
    margin-right: auto;
    padding: 0;
    font-size: ${props => props.theme.fontSizes.m};
    font-weight: ${props => props.theme.fontWeights.norm};
`;

// export const UserDeleteBtn = styled.button`
//     display: inline-block;
//     width: fix-content;
//     text-align: center;
//     text-transform: capitalize;
//     padding: ${props => props.theme.spacing(2)};
//     color: ${props => props.theme.colors.grey};
//     font-weight: ${props => props.theme.fontWeights.l};
//     font-size: ${props => props.theme.fontSizes.sm};
//     background: ${props => props.theme.colors.greyBtnBgrColor};
//     border: ${props => props.theme.spacing(0.7)} solid transparent;
//     border-radius: 50px;
//     transition: ${props => props.theme.transition.btnHoverTime} ease-in-out;
//     cursor: pointer;
//     margin-left: ${props => props.theme.spacing(3)};

//     :hover {
//         box-shadow: 0 0 5px 0 ${props => props.theme.colors.neonCrimson} inset,
//             0 0 10px 2px ${props => props.theme.colors.neonCrimson};
//         border: ${props => props.theme.spacing(0.7)} solid
//             ${props => props.theme.colors.neonCrimson};
//     }
// `;

export const IconWrapper = styled.div`
    display: flex;
`;

export const EditIcon = styled(BiEdit)`
    width: 23px;
    height: 23px;

    fill: ${props => props.theme.colors.grey};
    margin-left: ${props => props.theme.spacing(4)};

    :hover {
        fill: ${props => props.theme.colors.neonBlue};
    }
`;

export const DeleteIcon = styled(ImBin)`
    width: 20px;
    height: 20px;

    fill: ${props => props.theme.colors.grey};
    margin-left: ${props => props.theme.spacing(4)};

    :hover {
        fill: ${props => props.theme.colors.neonCrimson};
    }
`;
