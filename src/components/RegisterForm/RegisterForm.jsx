import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/auth-thunk';

import {
    RegForm,
    FormLabel,
    FormInput,
    FormBtn,
    // BtnBox,
    AlreadyRegisteredLink,
} from './RegisterForm.styled';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(registerThunk({ name, email, password }));

        resetForm();
    };

    const resetForm = () => {
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <RegForm onSubmit={handleSubmit} autoComplete="off">
                <FormLabel>
                    Name
                    <FormInput
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </FormLabel>

                <FormLabel>
                    Email
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </FormLabel>

                <FormLabel>
                    Password
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </FormLabel>
                {/* <BtnBox> */}
                <FormBtn type="submit">Sing up</FormBtn>
                <AlreadyRegisteredLink to="/login">
                    Already registered?
                </AlreadyRegisteredLink>
                {/* </BtnBox> */}
            </RegForm>
        </div>
    );
};

export default RegisterForm;
