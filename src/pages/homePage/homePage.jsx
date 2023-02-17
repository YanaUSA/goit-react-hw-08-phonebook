import {
    HomePageContainer,
    HomePageTitle,
    HomePageCall,
    HomePageCallSpan,
} from './homePage.styled';

const HomePage = () => {
    return (
        <HomePageContainer>
            <div>
                <HomePageTitle>Welcome to our Phonebook</HomePageTitle>
                <HomePageCall>
                    Please <HomePageCallSpan>Sign in</HomePageCallSpan> to start
                </HomePageCall>
            </div>
        </HomePageContainer>
    );
};

export default HomePage;
