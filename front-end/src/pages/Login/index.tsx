import React from 'react';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button';
import logo from '../../assets/images/logo.png';

export function Login() {
    const { control } = useForm();
    const navigation: any = useNavigation();

    function handleGoToHome() {
        navigation.navigate('Home');
    }

    function handleGoToRegister() {
        navigation.navigate('Register');
    }

    return (
        <S.Container>
            <S.Content>
                <S.Logo source={logo} />
                <S.Description>
                    Faca login ou crie uma conta para comecar
                </S.Description>
                <Input
                    placeholder="E-mail"
                    control={control}
                    name="description"
                />
                <Input placeholder="Senha" control={control} name="password" />
                <S.ButtonsContainer>
                    <Button title="Login" onPress={handleGoToHome} />
                    <S.OrText>ou</S.OrText>
                    <Button
                        title="Criar conta"
                        onPress={handleGoToRegister}
                        outlined
                    />
                </S.ButtonsContainer>
            </S.Content>
        </S.Container>
    );
}
