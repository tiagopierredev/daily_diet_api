import React from 'react';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';

export function MealsCard() {
    const list = [{ id: 1 }, { id: 2 }];
    const { navigate }: any = useNavigation();

    function renderMeals() {
        function navigateToDetails() {
            navigate('NewMealsDetails');
        }
        return list.map((meal) => {
            return (
                <S.MealContainer key={meal.id} onPress={navigateToDetails}>
                    <S.Infos>
                        <S.MealHours>20:00</S.MealHours>
                        <S.Divider />
                        <S.MealText numberOfLines={1}>
                            Whey protein com leite
                        </S.MealText>
                    </S.Infos>
                    <S.Status isDiet={true} />
                </S.MealContainer>
            );
        });
    }

    return (
        <S.Container>
            <S.Title>12.08.22</S.Title>
            <S.MealsList>{renderMeals()}</S.MealsList>
        </S.Container>
    );
}
