// libraries
import React from 'react';
import { ThemeProvider } from 'styled-components/native';

// routes
import { Routes } from './src/routes';

// styles
import { theme } from './src/styles/theme.config';

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Routes />
        </ThemeProvider>
    );
}
