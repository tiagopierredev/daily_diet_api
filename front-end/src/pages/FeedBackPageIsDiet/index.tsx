import React from 'react';
import illustration from '../../assets/images/Illustration-is-diet.png';
import * as S from './styles';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export function FeedBackPageIsDiet() {
    const { navigate }: any = useNavigation();
    function handleGoHome() {
        navigate('Home');
    }

    return (
        <S.Container>
            <S.Title>Continue assim!</S.Title>
            <S.Description>
                Você continua dentro da dieta. Muito bem!
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
