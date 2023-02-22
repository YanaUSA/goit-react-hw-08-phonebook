import { useState } from 'react';
import {
    LoginFormTitle,
    LogInForm,
    FormLabel,
    FormInput,
    FormBtn,
} from './LoginForm.styled';
import { loginThunk } from '../../redux/auth/auth-thunk';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
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
        dispatch(loginThunk({ email, password }));

        resetForm();
    };

    const resetForm = () => {
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <LogInForm onSubmit={handleSubmit} autoComplete="off">
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

                <FormBtn type="submit">Log in</FormBtn>
            </LogInForm>
        </div>
    );
};

export default LoginForm;
