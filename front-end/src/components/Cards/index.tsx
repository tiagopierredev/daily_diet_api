import React from 'react';
import { ArrowUpRight } from 'phosphor-react-native';
import * as S from './styles';
import { theme } from '../../styles/theme.config';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
    isPercentage?: boolean;
    themeCard: 'light' | 'dark' | 'default';
    title: string;
    description: string;
    handleClick?: () => void;
    width?: string;
}

export function Cards({
    isPercentage = false,
    themeCard,
    title,
    description,
    handleClick = () => null,
    width = '100%',
}: Props) {
    return (
        <S.Container color={themeCard} width={width}>
            {isPercentage && (
                <S.Button onPress={handleClick}>
                    <ArrowUpRight
                        color={
                            themeCard === 'light'
                                ? theme.colors.greenDark
                                : theme.colors.redDark
                        }
                        weight="regular"
                        size={RFValue(24)}
                    />
                </S.Button>
            )}
            <S.Title isPercentage={isPercentage}>{title}</S.Title>
            <S.Description numberOfLines={2}>{description}</S.Description>
        </S.Container>
    );
}
