import React from 'react';
import { useController } from 'react-hook-form';
import * as S from './styles';
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
    placeholder: string;
    control: any;
    name: string;
    multiline?: boolean;
    styleContainer?: any;
}

export function Input({
    placeholder,
    control,
    name,
    multiline,
    styleContainer,
    ...rest
}: InputProps) {
    const {
        field,
        fieldState: { error: err },
    } = useController({
        control,
        name,
        defaultValue: '',
    });

    return (
        <S.Container style={styleContainer}>
            <S.Title>{placeholder}</S.Title>
            <S.Input
                {...rest}
                numberOfLines={multiline ? 4 : 1}
                multiline={multiline}
                value={field.value}
                placeholder={placeholder}
                placeholderTextColor="#808080"
                cursorColor="#5E60CE"
                onChangeText={field.onChange}
            />
            <S.ErrorText>{err ? err.message : ''}</S.ErrorText>
        </S.Container>
    );
}
