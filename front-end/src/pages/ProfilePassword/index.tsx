import React, { useState } from 'react';
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

export function ProfilePassword() {
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
                <S.Title>Alterar senha</S.Title>
            </S.Header>
            <S.Content>
                <S.Form>
                    <Input
                        placeholder="Senha atual"
                        control={control}
                        name="password"
                    />
                    <Input
                        placeholder="Nova senha"
                        control={control}
                        name="password"
                    />
                    <Input
                        placeholder="Confirme a nova senha"
                        control={control}
                        name="password"
                    />
                </S.Form>
                <Button title="Salvar" onPress={handleGoToHome} />
            </S.Content>
        </S.Container>
    );
}
