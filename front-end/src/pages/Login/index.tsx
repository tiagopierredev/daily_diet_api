import React from 'react';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button';
import logo from '../../assets/images/logo.png';
import { useMutation } from 'react-query';
import { userLogin } from '../../services/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUserContext } from '../../context/useUserContext';
import { Alert } from 'react-native';

interface SchemaProps {
    email: string;
    password: string;
}

const schema = yup
    .object({
        email: yup
            .string()
            .required('E-mail é obrigatório')
            .email('E-mail inválido'),
        password: yup
            .string()
            .required('Password é obrigatório')
            .min(6, 'A senha deve conter no mínimo 6 digitos'),
    })
    .required();

export function Login() {
    const { control, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });
    const navigation: any = useNavigation();
    const { getUserInfo } = useUserContext();

    function handleGoToRegister() {
        navigation.navigate('Register');
    }

    const { mutateAsync, isLoading } = useMutation(
        async (data: any) => {
            const response = await userLogin(data);
            return response;
        },
        {
            onSuccess: async (response) => {
                await AsyncStorage.setItem(
                    '@daily_diet_token',
                    response.data?.token
                );
                await getUserInfo();
            },
            onError: (error: any) => {
                Alert.alert('Ops! Algo deu errado', error.message);
            },
        }
    );

    async function onSubmit(data: SchemaProps) {
        await mutateAsync(data);
    }

    return (
        <S.Container>
            <S.Content>
                <S.Logo source={logo} />
                <S.Description>
                    Faça login ou crie uma conta para começar
                </S.Description>
                <Input
                    placeholder="E-mail"
                    control={control}
                    name="email"
                    autoCapitalize="none"
                />
                <Input
                    placeholder="Senha"
                    control={control}
                    name="password"
                    secureTextEntry
                />
                <S.ButtonsContainer>
                    <Button
                        title="Login"
                        onPress={handleSubmit(onSubmit)}
                        disabled={isLoading}
                        isLoading={isLoading}
                    />
                    <S.OrText>ou</S.OrText>
                    <Button
                        title="Criar conta"
                        onPress={handleGoToRegister}
                        outlined
                        disabled={isLoading}
                    />
                </S.ButtonsContainer>
            </S.Content>
        </S.Container>
    );
}
