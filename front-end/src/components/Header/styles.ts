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
`;

export const ProfileButton = styled.TouchableOpacity``;
