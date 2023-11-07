import React from 'react';
import * as S from './styles';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
    children: React.ReactNode | React.ReactNode[];
}

export function Container({ children }: Props) {
    return (
        <S.Container>
            <StatusBar style="dark" />
            {children}
        </S.Container>
    );
}
