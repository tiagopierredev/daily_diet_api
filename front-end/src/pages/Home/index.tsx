// libraries
import React from 'react';
import { Container } from '../../components/Container';

// styles
import * as S from './styles';
import { Header } from '../../components/Header';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Cards } from '../../components/Cards';
import { HeaderList } from '../../components/HeaderList';
import { MealsCard } from '../../components/MealsCard';

export function Home({ navigation }: any) {
    const list = [{ id: 1 }, { id: 2 }, { id: 3 }];

    const percentage = 90.86;

    const themeCard = percentage >= 70 ? 'light' : 'dark';

    function navigateToUserMetrics() {
        navigation.navigate('UserMetrics');
    }

    return (
        <Container>
            <S.Content insets={useSafeAreaInsets()}>
                <Header />
                <S.CardContainer>
                    <Cards
                        isPercentage
                        themeCard={themeCard}
                        title={`${percentage}%`}
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
                    renderItem={() => <MealsCard />}
                />
            </S.Content>
        </Container>
    );
}
