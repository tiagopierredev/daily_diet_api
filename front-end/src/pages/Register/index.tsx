import React from 'react';
import * as S from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../../components/Button';
import logo from '../../assets/images/logo.png';
import * as yup from 'yup';
import { useMutation } from 'react-query';
import { userRegister } from '../../services/user';
import { Alert } from 'react-native';

interface SchemaProps {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
}

const schema = yup
    .object({
        name: yup.string().required('Nome é obrigatório'),
        email: yup
            .string()
            .required('E-mail é obrigatório')
            .email('E-mail inválido'),
        password: yup
            .string()
            .required('Password é obrigatório')
            .min(6, 'A senha deve conter no mínimo 6 digitos'),
        confirmPassword: yup
            .string()
            .max(32)
            .required('Confirmar senha é obrigatório')
            .oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
    })
    .required();

export function Register() {
    const { control, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });
    const navigation: any = useNavigation();

    function handleGoToHome() {
        navigation.navigate('Login');
    }

    const { mutateAsync, isLoading } = useMutation(
        async (data: SchemaProps) => {
            const response = await userRegister(data);
            return response;
        },
        {
            onSuccess: (response) => {
                Alert.alert(
                    'Cadastrado!',
                    'Seu cadastro foi realizado com sucesso!',
                    [
                        {
                            text: 'Ir para o login',
                            onPress: () => {
                                handleGoToHome();
                            },
                        },
                    ]
                );
            },
            onError: (error: any) => {
                Alert.alert('Ops! Algo deu errado!', error.message, [
                    {
                        text: 'Tentar novamente',
                        onPress: () => null,
                    },
                ]);
            },
        }
    );

    async function onSubmit(data: SchemaProps) {
        await mutateAsync(data);
    }

    return (
        <S.Container>
            <S.Header insets={useSafeAreaInsets()}>
                <S.LogoContainer>
                    <S.Logo source={logo} />
                    <S.Description>Crie sua conta para começar</S.Description>
                </S.LogoContainer>
            </S.Header>
            <S.Content>
                <S.Form>
                    <Input
                        autoCapitalize="words"
                        placeholder="Nome"
                        control={control}
                        name="name"
                    />
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
                    <Input
                        placeholder="Confirmar senha"
                        control={control}
                        name="confirmPassword"
                        secureTextEntry
                    />
                </S.Form>
                <Button
                    title="Cadastrar"
                    onPress={handleSubmit(onSubmit)}
                    isLoading={isLoading}
                    disabled={isLoading}
                />
                <S.OrText>ou</S.OrText>
                <Button
                    title="Login"
                    onPress={handleGoToHome}
                    outlined
                    disabled={isLoading}
                />
            </S.Content>
        </S.Container>
    );
}
