import React from 'react';
import illustration from '../../assets/images/Illustration-is-not-diet.png';
import * as S from './styles';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export function FeedBackPageIsNotDiet() {
    const { navigate }: any = useNavigation();
    function handleGoHome() {
        navigate('Home');
    }

    return (
        <S.Container>
            <S.Title>Que pena!</S.Title>
            <S.Description>
                Você saiu da dieta dessa vez, mas continue se esforçando e não
                desista!
            </S.Description>
            <S.Ilustration source={illustration} />
            <S.ButtonContainer>
                <Button
                    onPress={handleGoHome}
                    title="Ir para a página inicial"
                />
            </S.ButtonContainer>
        </S.Container>
    );
}
