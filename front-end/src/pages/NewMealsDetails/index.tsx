import React, { useState } from 'react';
import * as S from './styles';
import { ArrowLeft } from 'phosphor-react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../styles/theme.config';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button } from '../../components/Button';
import { PencilLine, Trash } from 'phosphor-react-native';
import { Modal } from '../../components/Modal';
import { useMutation, useQuery } from 'react-query';
import { deleteUniqueMeals, getUniqueMeals } from '../../services/meals';
import dayjs from 'dayjs';
import { ActivityIndicator } from 'react-native';
import { queryClient } from '../../services/queryClient';

export function NewMealsDetails() {
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const route: any = useRoute();
    const navigation: any = useNavigation();
    const insets = useSafeAreaInsets();

    const { data, isLoading } = useQuery(['meal', route?.params], async () => {
        const response = await getUniqueMeals(route?.params?.id);
        return response;
    });

    const deleteMutation = useMutation(
        async () => {
            const response = await deleteUniqueMeals(route?.params?.id);
            return response;
        },
        {
            onSuccess: async () => {
                navigation.goBack();
                setOpenModalDelete(false);
                queryClient.invalidateQueries('/dashboard');
            },
        }
    );

    async function handleDelete() {
        deleteMutation.mutate();
    }

    function handleGoEdit() {
        navigation.navigate('NewMeals', {
            snack: data?.data?.snack,
        });
    }

    function handleGoBack() {
        navigation.goBack();
    }

    function handleOpenOrCloseModalDelete() {
        setOpenModalDelete(!openModalDelete);
    }

    const date = dayjs(data?.data?.snack?.date).format('DD/MM/YYYY');
    const hours = dayjs(data?.data?.snack?.date).format('HH:mm');
    const isDiet = data?.data?.snack?.is_diet;

    if (isLoading) {
        return (
            <S.Container>
                <ActivityIndicator color={theme.colors.white} />
            </S.Container>
        );
    }

    return (
        <S.Container isDiet={isDiet}>
            <S.Header insets={insets}>
                <S.ButtonGoBack onPress={handleGoBack}>
                    <ArrowLeft
                        color={
                            isDiet
                                ? theme.colors.greenDark
                                : theme.colors.redDark
                        }
                        weight="regular"
                        size={RFValue(24)}
                    />
                </S.ButtonGoBack>
                <S.Title>Refeição</S.Title>
            </S.Header>
            <S.Content>
                <S.Form>
                    <S.DietTitle>{data?.data?.snack?.name}</S.DietTitle>
                    <S.DietText>{data?.data?.snack?.description}</S.DietText>
                    <S.DietHoursTitle>Data e hora</S.DietHoursTitle>
                    <S.DietText>
                        {date} às {hours}
                    </S.DietText>
                    <S.DietButton>
                        <S.StatusDiet isDiet={isDiet} />
                        <S.DietButtonText>
                            {isDiet ? 'dentro da dieta' : 'fora da dieta'}
                        </S.DietButtonText>
                    </S.DietButton>
                </S.Form>
                <Button
                    icon={
                        <PencilLine
                            weight="light"
                            size={20}
                            color={theme.colors.white}
                        />
                    }
                    title="Editar refeição"
                    onPress={handleGoEdit}
                />
                <Button
                    style={{
                        marginTop: 8,
                    }}
                    icon={
                        <Trash
                            weight="light"
                            size={20}
                            color={theme.colors.gray_200}
                        />
                    }
                    title="Excluir refeição"
                    outlined
                    onPress={handleOpenOrCloseModalDelete}
                />
            </S.Content>
            <Modal
                animationType="fade"
                visible={openModalDelete}
                title="Deseja realmente excluir o registro da refeição?"
                textButtonConfirm="Sim, excluir"
                textButtonCanceled="Cancelar"
                handleButtonConfirm={handleDelete}
                handleButtonCanceled={handleOpenOrCloseModalDelete}
                isLoading={deleteMutation.isLoading}
            />
        </S.Container>
    );
}
