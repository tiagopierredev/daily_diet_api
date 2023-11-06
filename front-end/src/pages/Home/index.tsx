// libraries
import React from 'react';
import { StatusBar } from 'expo-status-bar';

// assets
import logo from '../../assets/images/logo.png';

// styles
import * as S from './styles';

export function Home() {
    return (
        <S.Container>
            <StatusBar style="light" />
            <S.Content>
                <S.FirstBox>
                    <S.Logo source={logo} resizeMode="contain" />
                </S.FirstBox>
                <S.SecondBox>
                    <S.Title>Dotcoding</S.Title>
                    <S.Description>
                        Template incial para novos projetos!
                    </S.Description>
                </S.SecondBox>
            </S.Content>
        </S.Container>
    );
}
