import React from 'react';
import * as S from './styles';
import { TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
    title: string;
    icon?: any;
    outlined?: boolean;
}

export function Button({ title, icon, outlined, ...rest }: Props) {
    function renderIcon() {
        if (icon) {
            return <S.IconContainer>{icon}</S.IconContainer>;
        }

        return null;
    }

    return (
        <S.Container outlined={outlined} {...rest}>
            {renderIcon()}
            <S.Title outlined={outlined}>{title}</S.Title>
        </S.Container>
    );
}
