import styled from 'styled-components/native';

interface HeaderProps {
    insets: {
        top: number;
        bottom: number;
    };
}

interface ContentProps {
    isDiet: boolean;
}

export const Container = styled.View<ContentProps>`
    flex: 1;
    background-color: ${({ theme, isDiet }) =>
        isDiet ? theme.colors.greenLight : theme.colors.redLight};
`;

export const Header = styled.View<HeaderProps>`
    padding-top: ${({ insets }) => insets.top + 16}px;
    padding-bottom: ${({ insets }) => insets.bottom}px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.size(32)};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.gray_100};
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Description = styled.Text`
    font-size: ${({ theme }) => theme.size(14)};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.gray_200};
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Content = styled.ScrollView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.white};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: ${({ theme }) => theme.size(24)};
`;

export const TitleContent = styled.Text`
    text-align: center;
    font-size: ${({ theme }) => theme.size(14)};
    font-family: ${({ theme }) => theme.fonts.bold};
    margin-bottom: ${({ theme }) => theme.size(24)};
`;

export const OneCardContainer = styled.View`
    margin-bottom: ${({ theme }) => theme.size(16)};
`;

export const TwoCardContainer = styled.View`
    flex-direction: row;
    flex: 1;
    align-items: center;
    justify-content: space-between;
`;

export const ButtonGoBack = styled.TouchableOpacity`
    position: absolute;
    left: ${({ theme }) => theme.size(24)};
`;
