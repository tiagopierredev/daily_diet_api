import React from 'react';
import logo from '../../assets/images/logo.png';
import * as S from './styles';

export function Loading() {
    return (
        <S.Container>
            <S.Logo source={logo} />
        </S.Container>
    );
}
