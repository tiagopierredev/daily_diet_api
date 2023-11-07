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
import { Camera, SignOut } from 'phosphor-react-native';

export function Profile() {
    const { control } = useForm();
    const navigation: any = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    function handleGoToHome() {
        navigation.navigate('Home');
    }

    function handlePasswordView() {
        navigation.navigate('ProfilePassword');
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
                <S.Title>Meu perfil</S.Title>
            </S.Header>
            <S.Content>
                <S.Form>
                    <S.ButtonPhotoProfile>
                        <UserIcon />
                        <S.CamIcon>
                            <Camera color={theme.colors.white} />
                        </S.CamIcon>
                    </S.ButtonPhotoProfile>
                    <Input placeholder="Nome" control={control} name="name" />
                    <Input
                        placeholder="E-mail"
                        control={control}
                        name="description"
                    />
                    <S.ButtonContainer>
                        <S.PasswordButton onPress={handlePasswordView}>
                            <S.PasswordText>Alterar senha</S.PasswordText>
                        </S.PasswordButton>
                        <S.PasswordButtonLogOut onPress={handlePasswordView}>
                            <SignOut color={theme.colors.redDark} />
                            <S.PasswordButtonLogOutText>
                                Sair
                            </S.PasswordButtonLogOutText>
                        </S.PasswordButtonLogOut>
                    </S.ButtonContainer>
                </S.Form>
                <Button title="Salvar" onPress={handleGoToHome} />
            </S.Content>
        </S.Container>
    );
}
