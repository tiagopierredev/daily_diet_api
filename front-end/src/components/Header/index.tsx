import React from 'react';
import logo from '../../assets/images/logo.png';
import user from '../../assets/images/user.png';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';

export function Header() {
    const navigation: any = useNavigation();

    function handleNavigationProfile() {
        navigation.navigate('Profile');
    }

    return (
        <S.Container>
            <S.Logo source={logo} />
            <S.ProfileButton onPress={handleNavigationProfile}>
                <S.UserPhoto source={user} />
            </S.ProfileButton>
        </S.Container>
    );
}
