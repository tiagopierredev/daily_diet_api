import React from 'react';
import logo from '../../assets/images/logo.png';
import user from '../../assets/images/user.png';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { UserIcon } from '../../assets/images/userIcon';

import { useUserContext } from '../../context/useUserContext';

export function Header() {
    const navigation: any = useNavigation();
    const { user } = useUserContext();

    function handleNavigationProfile() {
        navigation.navigate('Profile');
    }

    function renderUserPhoto() {
        if (user?.photo) {
            return <S.UserPhoto source={{ uri: user?.photo }} />;
        } else {
            return (
                <S.ButtonPhotoProfile>
                    <UserIcon />
                </S.ButtonPhotoProfile>
            );
        }
    }

    return (
        <S.Container>
            <S.Logo source={logo} />
            <S.ProfileButton onPress={handleNavigationProfile}>
                {renderUserPhoto()}
            </S.ProfileButton>
        </S.Container>
    );
}
