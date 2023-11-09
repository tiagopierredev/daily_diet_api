import React from 'react';
import * as S from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Cards } from '../../components/Cards';
import { ArrowLeft } from 'phosphor-react-native';
import { theme } from '../../styles/theme.config';
import { RFValue } from 'react-native-responsive-fontsize';
import { useQuery } from 'react-query';
import { getDashboard } from '../../services/user';

export function UserMetrics({ navigation }: any) {
    function handleNavigateToHome() {
        navigation.navigate('Home');
    }

    const { isLoading, data } = useQuery('/dashboard', async () => {
        const response = await getDashboard();
        return response;
    });

    const percentage = data?.data?.percentage;
    const isDiet = percentage >= 70;

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
                <S.Title>{data?.data?.percentage || 0}%</S.Title>
                <S.Description>das refeições dentro da dieta</S.Description>
            </S.Header>
            <S.Content>
                <S.TitleContent>Estatísticas gerais</S.TitleContent>
                <S.OneCardContainer>
                    <Cards
                        themeCard="default"
                        title={data?.data?.bestSequence}
                        description="melhor sequência de pratos dentro da dieta"
                    />
                </S.OneCardContainer>
                <S.OneCardContainer>
                    <Cards
                        themeCard="default"
                        title={data?.data?.totalSnacks}
                        description="refeições registradas"
                    />
                </S.OneCardContainer>
                <S.TwoCardContainer>
                    <Cards
                        width="48%"
                        themeCard="light"
                        title={data?.data?.totalSnacksIsDiet}
                        description="refeições dentro da dieta"
                    />
                    <Cards
                        width="48%"
                        themeCard="dark"
                        title={data?.data?.totalSnacksIsNotDiet}
                        description="refeições fora da dieta"
                    />
                </S.TwoCardContainer>
            </S.Content>
        </S.Container>
    );
}
