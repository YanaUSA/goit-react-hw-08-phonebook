import {
    FooterBox,
    FooterContainer,
    RightsReservedSpan,
    SocialLink,
} from './Footer.styled';

const Footer = () => {
    return (
        <FooterBox>
            <FooterContainer>
                <RightsReservedSpan>
                    {' '}
                    <RightsReservedSpan>
                        <span>&#169;</span>
                    </RightsReservedSpan>{' '}
                    2023 All rights reserved. Developed by Yana Usatiuk |{' '}
                </RightsReservedSpan>
                <SocialLink
                    to="https://www.linkedin.com/in/yana-usatiuk-223aa1262/"
                    target="blank"
                >
                    {' '}
                    LinkedIn{' '}
                </SocialLink>
            </FooterContainer>
        </FooterBox>
    );
};

export default Footer;
