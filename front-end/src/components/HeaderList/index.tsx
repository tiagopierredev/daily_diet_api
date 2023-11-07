import React from 'react';
import * as S from './styles';
import { Button } from '../Button';
import { Plus } from 'phosphor-react-native';
import { theme } from '../../styles/theme.config';
import { useNavigation } from '@react-navigation/native';

interface Props {
    title: string;
    buttonText: string;
}

export function HeaderList({ title, buttonText }: Props) {
    const { navigate }: any = useNavigation();

    function handleNavigation() {
        navigate('NewMeals');
    }

    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            <Button
                title={buttonText}
                icon={<Plus size={24} color={theme.colors.white} />}
                onPress={handleNavigation}
            />
        </S.Container>
    );
}
