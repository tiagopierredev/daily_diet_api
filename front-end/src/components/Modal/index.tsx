import React from 'react';
import * as S from './styles';
import { ModalProps } from 'react-native';
import { Button } from '../Button';

interface Props extends ModalProps {
    title: string;
    textButtonConfirm: string;
    handleButtonConfirm: () => void;
    textButtonCanceled?: string;
    handleButtonCanceled?: () => void;
}

export function Modal({
    title,
    handleButtonCanceled,
    handleButtonConfirm,
    textButtonCanceled,
    textButtonConfirm,
    ...rest
}: Props) {
    return (
        <S.Container transparent {...rest}>
            <S.Content>
                <S.Body>
                    <S.Title>{title}</S.Title>
                    <S.ButtonContainer>
                        {textButtonCanceled && (
                            <Button
                                style={{ width: '48%' }}
                                outlined
                                title={textButtonCanceled}
                                onPress={handleButtonCanceled}
                            />
                        )}
                        <Button
                            style={{
                                width: textButtonCanceled ? '48%' : '100%',
                            }}
                            title={textButtonConfirm}
                            onPress={handleButtonConfirm}
                        />
                    </S.ButtonContainer>
                </S.Body>
            </S.Content>
        </S.Container>
    );
}
