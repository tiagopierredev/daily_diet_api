import React from 'react';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';

interface MealsCardProps {
    created_at: string;
    date: string;
    description: string;
    id: string;
    is_diet: boolean;
    name: string;
    userId: string;
}

interface Props {
    item: { date: string; meals: MealsCardProps[] };
}

export function MealsCard({ item }: Props) {
    const { navigate }: any = useNavigation();

    function renderMeals() {
        return item?.meals?.map((meal) => {
            const formattedDate = dayjs(meal?.date).format('HH:mm');
            function navigateToDetails() {
                navigate('NewMealsDetails', meal);
            }
            return (
                <S.MealContainer key={meal.id} onPress={navigateToDetails}>
                    <S.Infos>
                        <S.MealHours>{formattedDate}</S.MealHours>
                        <S.Divider />
                        <S.MealText numberOfLines={1}>{meal?.name}</S.MealText>
                    </S.Infos>
                    <S.Status isDiet={meal.is_diet} />
                </S.MealContainer>
            );
        });
    }

    return (
        <S.Container>
            <S.Title>{item?.date}</S.Title>
            <S.MealsList>{renderMeals()}</S.MealsList>
        </S.Container>
    );
}
