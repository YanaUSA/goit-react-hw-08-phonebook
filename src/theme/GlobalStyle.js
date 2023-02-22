import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Anek Odia', sans-serif;
    font-size: ${props => props.theme.fontSizes.m};
    letter-spacing: 0.03em;

    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.darkBgrColor};

    margin-top: 52px;
    margin-bottom: 30px;
}

h1, h2, h3, h4, h5, h6, p {
    margin: 0;
}

a {
    display: block;
    text-decoration: none;
}

ul,
ol {
    list-style: none;
    margin: 0;
    padding: 0;
}

button {
    display: inline-flex;
    border: none;
    padding: 0;
    cursor: pointer;
}

img {
    display: block;
    max-width: 100%;
    height: auto;
    object-fit: cover;
}
`;

export default GlobalStyle;
