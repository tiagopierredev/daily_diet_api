import React, { useState } from 'react';
import { useController } from 'react-hook-form';
import * as S from './styles';
import { TextInputProps } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import dayjs from 'dayjs';

interface InputProps extends TextInputProps {
    placeholder: string;
    control: any;
    name: string;
    multiline?: boolean;
    styleContainer?: any;
    mask?: 'date' | 'time';
}

export function Input({
    placeholder,
    control,
    name,
    multiline,
    styleContainer,
    mask,
    ...rest
}: InputProps) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const {
        field,
        fieldState: { error: err },
    } = useController({
        control,
        name,
        defaultValue: rest.defaultValue || '',
    });

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (value: any) => {
        const date = dayjs(value).format('DD/MM/YYYY');
        const hours = dayjs(value).format('HH:mm');

        field.onChange(mask === 'date' ? date : hours);
        hideDatePicker();
    };

    return (
        <S.Container style={styleContainer}>
            <S.Title>{placeholder}</S.Title>
            <S.InputContainer
                multiline={multiline}
                onPress={mask ? showDatePicker : () => null}
            >
                <S.Input
                    {...rest}
                    numberOfLines={multiline ? 4 : 1}
                    multiline={multiline}
                    value={field.value}
                    editable={mask ? false : true}
                    placeholder={placeholder}
                    placeholderTextColor="#808080"
                    cursorColor="#5E60CE"
                    onChangeText={field.onChange}
                    onPressIn={mask ? showDatePicker : () => null}
                />
            </S.InputContainer>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode={mask}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            <S.ErrorText>{err ? err.message : ''}</S.ErrorText>
        </S.Container>
    );
}
