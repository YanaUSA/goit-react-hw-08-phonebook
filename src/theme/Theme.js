import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = Object.freeze({
    colors: {
        white: 'antiquewhite',
        black: '#000',
        grey: 'grey',
        // accent: 'tomato',
        accent: '#d70014',
        darkBgrColor: '#2c2c2c',
        greyBtnBgrColor: '#333',
        neonBlue: '#00d7c3',
        neonCrimson: '#d70014',
    },
    fonts: ['Anek Odia', 'sans-serif'],
    fontSizes: {
        sm: '12px',
        m: '14px',
        l: '16px',
        xl: '22px',
    },
    fontWeights: {
        norm: '400',
        m: '500',
        l: '600',
        xl: '700',
    },
    //spacing (padding/margin) can be transfered in component as props.theme.spacing(4) = 16px//
    spacing: value => `${4 * value}px`,
    transition: {
        time: '0.3s',
        btnHoverTime: '0.15s',
    },
});

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
