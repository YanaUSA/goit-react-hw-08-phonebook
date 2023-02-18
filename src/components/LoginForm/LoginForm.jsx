import { useState } from 'react';
import {
    LoginFormTitle,
    LogInForm,
    FormLabel,
    FormInput,
    FormBtn,
} from './LoginForm.styled';

const LoginForm = () => {
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
        resetForm();
    };

    const resetForm = () => {
        setEmail('');
        setPassword('');
    };

    return (
        <main>
            <LoginFormTitle>Log-in page</LoginFormTitle>

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
        </main>
    );
};

export default LoginForm;
