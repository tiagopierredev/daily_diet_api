// libraries
import React, { useState } from 'react';
import { Container } from '../../components/Container';

// styles
import * as S from './styles';
import { Header } from '../../components/Header';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Cards } from '../../components/Cards';
import { HeaderList } from '../../components/HeaderList';
import { MealsCard } from '../../components/MealsCard';
import { useQuery } from 'react-query';
import { getDashboard } from '../../services/user';
import { RefreshControl } from 'react-native';
import { theme } from '../../styles/theme.config';
import dayjs from 'dayjs';

export function Home({ navigation }: any) {
    const [list, setList] = useState<any>([]);

    const { isLoading, data, refetch } = useQuery(
        '/dashboard',
        async () => {
            const response = await getDashboard();
            return response;
        },
        {
            onSuccess: async (data) => {
                const groupedByDate: any = {};

                data?.data?.snacks.forEach((item: any) => {
                    const date = dayjs(item?.date).format('DD.MM.YY');
                    if (!groupedByDate[date]) {
                        groupedByDate[date] = [];
                    }
                    groupedByDate[date].push(item);
                });

                const groupedArray = Object.keys(groupedByDate).map((date) => {
                    return {
                        date,
                        meals: groupedByDate[date],
                    };
                });

                setList(groupedArray);
            },
        }
    );

    function navigateToUserMetrics() {
        navigation.navigate('UserMetrics');
    }

    const percentage = data?.data?.percentage;
    const themeCard = percentage >= 70 ? 'light' : 'dark';

    return (
        <Container>
            <S.Content insets={useSafeAreaInsets()}>
                <Header />
                <S.CardContainer>
                    <Cards
                        isPercentage
                        themeCard={themeCard}
                        title={`${data?.data?.percentage || 0}%`}
                        description="das refeições dentro da dieta"
                        handleClick={navigateToUserMetrics}
                    />
                </S.CardContainer>
                <S.ListHeaderContainer>
                    <HeaderList title="Refeições" buttonText="Nova refeição" />
                </S.ListHeaderContainer>
                <S.List
                    showsVerticalScrollIndicator={false}
                    data={list}
                    renderItem={({ item }: any) => <MealsCard item={item} />}
                    ListEmptyComponent={() => (
                        <S.EmptyList>Nenhuma refeição encontrada</S.EmptyList>
                    )}
                    refreshControl={
                        <RefreshControl
                            tintColor={theme.colors.gray_100}
                            refreshing={isLoading}
                            onRefresh={refetch}
                        />
                    }
                />
            </S.Content>
        </Container>
    );
}
