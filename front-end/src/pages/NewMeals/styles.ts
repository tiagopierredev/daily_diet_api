import styled, { css } from 'styled-components/native';

interface HeaderProps {
    insets: {
        top: number;
        left: number;
        right: number;
        bottom: number;
    };
}

interface DietButtonProps {
    isDiet?: 'yes' | 'no' | null;
    value?: 'yes' | 'no' | null;
}

interface StatusDietProps {
    isDiet?: boolean;
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

export const Form = styled.View`
    flex: 1;
`;

export const ContainerTwoInputs = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const DietText = styled.Text`
    font-size: ${({ theme }) => theme.size(14)};
    font-family: ${({ theme }) => theme.fonts.bold};
    margin-bottom: ${({ theme }) => theme.size(8)};
`;

export const DietButton = styled.TouchableOpacity<DietButtonProps>`
    height: ${({ theme }) => theme.size(50)};
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.gray_600};
    ${({ isDiet, theme, value }) =>
        isDiet === 'yes' &&
        value === 'yes' &&
        css`
            background-color: ${theme.colors.greenLight};
            border: 1px solid ${theme.colors.greenDark};
        `};
    ${({ isDiet, theme, value }) =>
        isDiet === 'no' &&
        value === 'no' &&
        css`
            background-color: ${theme.colors.redLight};
            border: 1px solid ${theme.colors.redDark};
        `};
    width: 48%;
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
