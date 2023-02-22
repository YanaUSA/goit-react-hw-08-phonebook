import {
    PageContainer,
    HomePageTitle,
    HomePageCall,
    HomePageCallLink,
    PhonebookIcon,
} from './homePage.styled';

const HomePage = () => {
    return (
        <PageContainer>
            <PhonebookIcon />
            <HomePageTitle>Welcome to our Phonebook</HomePageTitle>
            <HomePageCall>
                Please <HomePageCallLink to="/login"> Log in </HomePageCallLink>{' '}
                to start
            </HomePageCall>
            <HomePageCall>
                You're still not with us? Then just{' '}
                <HomePageCallLink to="/register"> Sign up </HomePageCallLink> to
                join
            </HomePageCall>
        </PageContainer>
    );
};

export default HomePage;
