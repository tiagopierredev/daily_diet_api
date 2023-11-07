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

export function NewMeals() {
    const { control } = useForm();
    const navigation: any = useNavigation();

    const [isDiet, setIsDiet] = useState<null | 'yes' | 'no'>(null);

    function handleIsDiet(value: 'yes' | 'no') {
        setIsDiet(value);
    }

    function handleGoBack() {
        navigation.goBack();
    }

    function handleGoToFeedback() {
        // navigation.navigate('FeedBackPageIsDiet');
        navigation.navigate('FeedBackPageIsNotDiet');
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
                <S.Title>Nova refeição</S.Title>
            </S.Header>
            <S.Content>
                <S.Form>
                    <Input placeholder="Nome" control={control} name="name" />
                    <Input
                        placeholder="Descrição"
                        control={control}
                        name="description"
                        multiline
                        maxLength={255}
                    />
                    <S.ContainerTwoInputs>
                        <Input
                            styleContainer={{ width: '48%' }}
                            placeholder="Data"
                            control={control}
                            name="date"
                        />
                        <Input
                            styleContainer={{ width: '48%' }}
                            placeholder="Hora"
                            control={control}
                            name="hours"
                        />
                    </S.ContainerTwoInputs>
                    <S.DietText>Está dentro da dieta?</S.DietText>
                    <S.ContainerTwoInputs>
                        <S.DietButton
                            isDiet={isDiet}
                            onPress={() => handleIsDiet('yes')}
                            value="yes"
                        >
                            <S.StatusDiet isDiet />
                            <S.DietButtonText>Sim</S.DietButtonText>
                        </S.DietButton>
                        <S.DietButton
                            isDiet={isDiet}
                            onPress={() => handleIsDiet('no')}
                            value="no"
                        >
                            <S.StatusDiet />
                            <S.DietButtonText>Não</S.DietButtonText>
                        </S.DietButton>
                    </S.ContainerTwoInputs>
                </S.Form>
                <Button
                    title="Cadastrar refeição"
                    onPress={handleGoToFeedback}
                />
            </S.Content>
        </S.Container>
    );
}
