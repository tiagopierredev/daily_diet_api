// libraries
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import {
    useFonts,
    NunitoSans_400Regular,
    NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans';

// routes
import { Routes } from './src/routes';

// styles
import { theme } from './src/styles/theme.config';
import { queryClient } from './src/services/queryClient';
import { QueryClientProvider } from 'react-query';
import { UserProvider } from './src/context/useUserContext';

export default function App() {
    const [fontsLoaded] = useFonts({
        NunitoSans_400Regular,
        NunitoSans_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <QueryClientProvider client={queryClient}>
            <UserProvider>
                <ThemeProvider theme={theme}>
                    <Routes />
                </ThemeProvider>
            </UserProvider>
        </QueryClientProvider>
    );
}
