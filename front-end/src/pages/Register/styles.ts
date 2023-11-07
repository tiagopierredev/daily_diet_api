import styled from 'styled-components/native';

interface HeaderProps {
    insets: {
        top: number;
        left: number;
        right: number;
        bottom: number;
    };
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.gray_500};
`;

export const Header = styled.View<HeaderProps>`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: ${({ insets, theme }) => theme.size(insets.top)};
    margin-bottom: ${({ insets, theme }) => theme.size(insets.bottom)};
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.size(18)};
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ButtonGoBack = styled.TouchableOpacity`
    position: absolute;
    left: ${({ theme }) => theme.size(24)};
`;

export const Content = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    padding: ${({ theme }) => theme.size(24)};
    background-color: ${({ theme }) => theme.colors.white};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

export const Form = styled.View`
    flex: 1;
`;

export const ButtonPhotoProfile = styled.TouchableOpacity`
    align-self: center;
    margin-top: ${({ theme }) => theme.size(8)};
    margin-bottom: ${({ theme }) => theme.size(24)};
    width: ${({ theme }) => theme.size(100)};
    height: ${({ theme }) => theme.size(100)};
    align-items: center;
    justify-content: center;
    border-radius: ${({ theme }) => theme.size(100)};
    border: 2px solid ${({ theme }) => theme.colors.gray_300};
    padding: ${({ theme }) => theme.size(16)};
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
