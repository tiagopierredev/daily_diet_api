import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.Image`
    width: ${({ theme }) => theme.size(82)};
    height: ${({ theme }) => theme.size(37)};
`;

export const UserPhoto = styled.Image`
    width: ${({ theme }) => theme.size(40)};
    height: ${({ theme }) => theme.size(40)};
    border-radius: ${({ theme }) => theme.size(100)};
`;

export const ProfileButton = styled.TouchableOpacity``;

export const ButtonPhotoProfile = styled.View`
    align-self: center;
    width: ${({ theme }) => theme.size(40)};
    height: ${({ theme }) => theme.size(40)};
    align-items: center;
    justify-content: center;
    border-radius: ${({ theme }) => theme.size(100)};
    border: 2px solid ${({ theme }) => theme.colors.gray_300};
    padding: ${({ theme }) => theme.size(8)};
    background-color: ${({ theme }) => theme.colors.gray_500};
`;

export const CamIcon = styled.View`
    background-color: ${({ theme }) => theme.colors.gray_100};
    width: ${({ theme }) => theme.size(32)};
    height: ${({ theme }) => theme.size(32)};
    border-radius: ${({ theme }) => theme.size(32)};
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    right: 0;
`;
