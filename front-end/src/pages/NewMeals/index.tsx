import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { ArrowLeft } from 'phosphor-react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../styles/theme.config';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Input } from '../../components/Input';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useMutation } from 'react-query';
import { postMeals, putMeals } from '../../services/meals';
import { Alert } from 'react-native';
import dayjs from 'dayjs';
import { queryClient } from '../../services/queryClient';

const schema = yup.object({
    name: yup.string().required('Nome obrigatório'),
    description: yup.string().required('Descrição obrigatória'),
    date: yup.string().required('Data obrigatória'),
    hours: yup.string().required('Hora obrigatória'),
    isDiet: yup.boolean().required('Selecione uma opção'),
});

export function NewMeals() {
    const route: any = useRoute();

    const [isDiet, setIsDiet] = useState<null | 'yes' | 'no'>(
        route.params?.snack?.is_diet ? 'yes' : 'no'
    );

    const navigation: any = useNavigation();
    const {
        control,
        handleSubmit,
        formState: { errors: err },
        setValue,
        watch,
        clearErrors,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const { mutateAsync, isLoading } = useMutation(
        async (data: any) => {
            route.params?.snack
                ? await putMeals(data, route.params?.snack.id)
                : await postMeals(data);

            return {
                ...route.params?.snack,
                ...data,
                is_diet: data?.isDiet,
            };
        },
        {
            onSuccess: async (response) => {
                handleGoToFeedback(response);
                queryClient.invalidateQueries('/dashboard');
            },
            onError: (err: any) => {
                Alert.alert('Ops! Algo deu errado', err.message);
            },
        }
    );

    function handleIsDiet(value: 'yes' | 'no') {
        setValue('isDiet', value === 'yes');
        setIsDiet(value);
    }

    function handleGoBack() {
        navigation.goBack();
    }

    function handleGoToFeedback(data?: any) {
        if (route.params?.snack) {
            return navigation.navigate('NewMealsDetails', data);
        }
        if (watch('isDiet')) {
            return navigation.navigate('FeedBackPageIsDiet');
        }

        return navigation.navigate('FeedBackPageIsNotDiet');
    }

    function onSubmit(data: any) {
        const dateTime = `${data.date} ${data.hours}`;
        const date = dayjs(dateTime).format('YYYY-DD-MMTHH:mm');

        const dataFormated = {
            ...data,
            date,
        };

        mutateAsync(dataFormated);
    }

    useEffect(() => {
        setValue('isDiet', isDiet === 'yes');
    }, [isDiet]);

    useEffect(() => {
        clearErrors('isDiet');
    }, [watch('isDiet')]);

    const isDietValue = route.params?.snack ? isDiet : null;

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
                <S.Title>
                    {route.params?.snack ? 'Editar refeição' : 'Nova refeição'}
                </S.Title>
            </S.Header>
            <S.Content>
                <S.Form>
                    <Input
                        placeholder="Nome"
                        control={control}
                        name="name"
                        defaultValue={route.params?.snack?.name}
                    />
                    <Input
                        placeholder="Descrição"
                        control={control}
                        name="description"
                        multiline
                        maxLength={255}
                        defaultValue={route.params?.snack?.description}
                    />
                    <S.ContainerTwoInputs>
                        <Input
                            styleContainer={{ width: '48%' }}
                            placeholder="Data"
                            control={control}
                            name="date"
                            mask="date"
                            defaultValue={dayjs(
                                route.params?.snack?.date
                            ).format('DD/MM/YYYY')}
                        />
                        <Input
                            styleContainer={{ width: '48%' }}
                            placeholder="Hora"
                            control={control}
                            name="hours"
                            mask="time"
                            defaultValue={dayjs(
                                route.params?.snack?.date
                            ).format('HH:mm')}
                        />
                    </S.ContainerTwoInputs>
                    <S.DietText>Está dentro da dieta?</S.DietText>
                    <S.ContainerTwoInputs>
                        <S.DietButton
                            isDiet={isDietValue}
                            onPress={() => handleIsDiet('yes')}
                            value="yes"
                        >
                            <S.StatusDiet isDiet />
                            <S.DietButtonText>Sim</S.DietButtonText>
                        </S.DietButton>
                        <S.DietButton
                            isDiet={isDietValue}
                            onPress={() => handleIsDiet('no')}
                            value="no"
                        >
                            <S.StatusDiet />
                            <S.DietButtonText>Não</S.DietButtonText>
                        </S.DietButton>
                    </S.ContainerTwoInputs>
                    <S.ErrorText>
                        {err.isDiet ? err.isDiet.message : ''}
                    </S.ErrorText>
                </S.Form>
                <Button
                    title={
                        route.params?.snack
                            ? 'Editar refeição'
                            : 'Cadastrar refeição'
                    }
                    onPress={handleSubmit(onSubmit)}
                    isLoading={isLoading}
                    disabled={isLoading}
                />
            </S.Content>
        </S.Container>
    );
}
