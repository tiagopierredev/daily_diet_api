import React from 'react';
import * as S from './styles';
import { ArrowLeft } from 'phosphor-react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../styles/theme.config';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button';
import { UserIcon } from '../../assets/images/userIcon';
import { Camera } from 'phosphor-react-native';

export function Register() {
    const { control } = useForm();
    const navigation: any = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    function handleGoToHome() {
        navigation.navigate('Home');
    }

    return (
        <S.Container>
            <S.Header insets={useSafeAreaInsets()}>
                <S.ButtonGoBack onPress={handleGoBack}>
                    <ArrowLeft
                        color={theme.colors.gray_200}
                        weight="regular"
                        size={RFValue(24)}
                    />
                </S.ButtonGoBack>
                <S.Title>Criar conta</S.Title>
            </S.Header>
            <S.Content>
                {/* <S.ButtonPhotoProfile>
                    <UserIcon />
                    <S.CamIcon>
                        <Camera color={theme.colors.white} />
                    </S.CamIcon>
                </S.ButtonPhotoProfile> */}
                <S.Form>
                    <Input placeholder="Nome" control={control} name="name" />
                    <Input
                        placeholder="E-mail"
                        control={control}
                        name="description"
                    />
                    <Input
                        placeholder="Senha"
                        control={control}
                        name="password"
                    />
                    <Input
                        placeholder="Confirmar senha"
                        control={control}
                        name="confirmPassword"
                    />
                </S.Form>
                <Button title="Cadastrar" onPress={handleGoToHome} />
            </S.Content>
        </S.Container>
    );
}
