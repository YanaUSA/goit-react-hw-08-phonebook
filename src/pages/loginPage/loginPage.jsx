import { useState } from 'react';
import {
    LoginFormTitle,
    LoginForm,
    FormLabel,
    FormInput,
    FormBtn,
} from './loginPage.styled';

const LoginPage = () => {
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
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <LoginFormTitle>Login page</LoginFormTitle>

            <LoginForm onSubmit={handleSubmit} autoComplete="off">
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
            </LoginForm>
        </div>
    );
};

export default LoginPage;
