import React, { useState } from 'react';
import * as S from './styles';
import { ArrowLeft } from 'phosphor-react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../styles/theme.config';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button';
import { PencilLine, Trash } from 'phosphor-react-native';
import { Modal } from '../../components/Modal';

export function NewMealsDetails() {
    const [openModalDelete, setOpenModalDelete] = useState(false);

    const navigation = useNavigation();
    const isDiet = true;

    function handleGoBack() {
        navigation.goBack();
    }

    function handleOpenOrCloseModalDelete() {
        setOpenModalDelete(!openModalDelete);
    }

    return (
        <S.Container isDiet={isDiet}>
            <S.Header insets={useSafeAreaInsets()}>
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
                    <S.DietTitle>Sandwich</S.DietTitle>
                    <S.DietText>
                        Sanduíche de pão integral com atum e salada de alface e
                        tomate
                    </S.DietText>
                    <S.DietHoursTitle>Data e hora</S.DietHoursTitle>
                    <S.DietText>12/08/2022 às 20:00</S.DietText>
                    <S.DietButton>
                        <S.StatusDiet isDiet={isDiet} />
                        <S.DietButtonText>dentro da dieta</S.DietButtonText>
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
                handleButtonConfirm={() => null}
                handleButtonCanceled={handleOpenOrCloseModalDelete}
            />
        </S.Container>
    );
}
