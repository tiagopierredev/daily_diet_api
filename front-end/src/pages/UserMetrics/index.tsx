import React from 'react';
import * as S from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Cards } from '../../components/Cards';
import { ArrowLeft } from 'phosphor-react-native';
import { theme } from '../../styles/theme.config';
import { RFValue } from 'react-native-responsive-fontsize';

export function UserMetrics({ navigation }: any) {
    const isDiet = true;

    function handleNavigateToHome() {
        navigation.navigate('Home');
    }

    return (
        <S.Container isDiet={isDiet}>
            <S.Header insets={useSafeAreaInsets()}>
                <S.ButtonGoBack onPress={handleNavigateToHome}>
                    <ArrowLeft
                        color={
                            isDiet
                                ? theme.colors.greenDark
                                : theme.colors.redDark
                        }
                        weight="regular"
                        size={RFValue(24)}
                    />
                </S.ButtonGoBack>
                <S.Title>90,86%</S.Title>
                <S.Description>das refeições dentro da dieta</S.Description>
            </S.Header>
            <S.Content>
                <S.TitleContent>Estatísticas gerais</S.TitleContent>
                <S.OneCardContainer>
                    <Cards
                        themeCard="default"
                        title="22"
                        description="melhor sequência de pratos dentro da dieta"
                    />
                </S.OneCardContainer>
                <S.OneCardContainer>
                    <Cards
                        themeCard="default"
                        title="109"
                        description="refeições registradas"
                    />
                </S.OneCardContainer>
                <S.TwoCardContainer>
                    <Cards
                        width="48%"
                        themeCard="light"
                        title="99"
                        description="refeições dentro da dieta"
                    />
                    <Cards
                        width="48%"
                        themeCard="dark"
                        title="10"
                        description="refeições fora da dieta"
                    />
                </S.TwoCardContainer>
            </S.Content>
        </S.Container>
    );
}
