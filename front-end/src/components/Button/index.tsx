import React from 'react';
import * as S from './styles';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { theme } from '../../styles/theme.config';

interface Props extends TouchableOpacityProps {
    title: string;
    icon?: any;
    outlined?: boolean;
    isLoading?: boolean;
}

export function Button({ title, icon, outlined, isLoading, ...rest }: Props) {
    function renderIcon() {
        if (icon) {
            return <S.IconContainer>{icon}</S.IconContainer>;
        }

        return null;
    }

    function renderLoading() {
        if (isLoading) {
            return <ActivityIndicator color={theme.colors.white} />;
        }

        return (
            <>
                {renderIcon()}
                <S.Title outlined={outlined}>{title}</S.Title>
            </>
        );
    }

    return (
        <S.Container outlined={outlined} {...rest}>
            {renderLoading()}
        </S.Container>
    );
}
