import RegisterForm from 'components/RegisterForm/RegisterForm';
import { PageContainer, RegisterFormTitle } from './registerPage.styled';

const RegisterPage = () => {
    return (
        <PageContainer>
            <RegisterFormTitle>Sing-up page</RegisterFormTitle>
            <RegisterForm />
        </PageContainer>
    );
};

export default RegisterPage;
