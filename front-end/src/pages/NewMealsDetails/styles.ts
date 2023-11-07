import styled from 'styled-components/native';

interface HeaderProps {
    insets: {
        top: number;
        left: number;
        right: number;
        bottom: number;
    };
    isDiet?: boolean;
}

interface StatusDietProps {
    isDiet?: boolean;
}

interface ContainerProps {
    isDiet?: boolean;
}

export const Container = styled.View<ContainerProps>`
    flex: 1;
    background-color: ${({ theme, isDiet }) =>
        isDiet ? theme.colors.greenLight : theme.colors.redLight};
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
    contentContainerStyle: {
        flex: 1,
    },
})`
    flex: 1;
    padding: ${({ theme }) => theme.size(24)};
    background-color: ${({ theme }) => theme.colors.white};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

export const DietText = styled.Text`
    font-size: ${({ theme }) => theme.size(16)};
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const DietTitle = styled.Text`
    font-size: ${({ theme }) => theme.size(20)};
    font-family: ${({ theme }) => theme.fonts.bold};
    margin-bottom: ${({ theme }) => theme.size(8)};
`;

export const DietHoursTitle = styled.Text`
    font-size: ${({ theme }) => theme.size(14)};
    font-family: ${({ theme }) => theme.fonts.bold};
    margin-top: ${({ theme }) => theme.size(24)};
    margin-bottom: ${({ theme }) => theme.size(8)};
`;

export const DietButton = styled.TouchableOpacity`
    height: ${({ theme }) => theme.size(34)};
    border-radius: 1000px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.gray_600};
    width: 48%;
    margin-top: ${({ theme }) => theme.size(16)};
`;

export const DietButtonText = styled.Text`
    font-size: ${({ theme }) => theme.size(14)};
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const StatusDiet = styled.View<StatusDietProps>`
    width: 8px;
    height: 8px;
    background-color: ${({ theme, isDiet }) =>
        isDiet ? theme.colors.greenDark : theme.colors.redDark};
    margin-right: ${({ theme }) => theme.size(8)};
    border-radius: 4px;
`;

export const Form = styled.View`
    flex: 1;
`;
