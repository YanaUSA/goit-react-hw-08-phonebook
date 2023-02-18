import styled from 'styled-components';

export const RegisterFormTitle = styled.h1`
    font-size: 36px;
    font-weight: 700;
    margin: 20px 0;
    text-transform: capitalize;
`;

export const LoginForm = styled.form`
    width: 300px;
`;

export const FormLabel = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    text-transform: capitalize;
    font-weight: 500;
    font-size: 16px;
`;

export const FormInput = styled.input`
    display: block;
    width: 300px;
    margin-top: 8px;
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    box-shadow: 0 0 2px 0.2px #d3d3d3;
`;

export const FormBtn = styled.button`
    width: fix-content;
    padding: 14px;

    text-align: center;
    color: #000;
    text-transform: uppercase;
    font-weight: 600;

    cursor: pointer;
    display: inline-block;

    background-color: transparent;
    border: 3px solid #00d7c3;
    border-radius: 50px;
    -webkit-transition: 0.15s ease-in-out;
    transition: 0.15s ease-in-out;
    color: #00d7c3;
    font-size: 14px;
    font-weight: 600;

    :hover {
        box-shadow: 0 0 10px 0 #00d7c3 inset, 0 0 20px 2px #00d7c3;
        border: 3px solid #00d7c3;
    }
`;
