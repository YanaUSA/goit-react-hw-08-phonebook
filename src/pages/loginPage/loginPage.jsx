import LoginForm from 'components/LoginForm/LoginForm';
import { PageContainer, LoginFormTitle } from './loginPage.styled';

const LoginPage = () => {
    return (
        <PageContainer>
            <LoginFormTitle>Log-in page</LoginFormTitle>
            <LoginForm />
        </PageContainer>
    );
};

export default LoginPage;
