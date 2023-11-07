import styled from 'styled-components/native';

interface StatuProps {
    isDiet: boolean;
}

export const Container = styled.View``;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.size(18)};
    font-family: ${({ theme }) => theme.fonts.bold};
    margin-bottom: ${({ theme }) => theme.size(8)};
`;

export const MealsList = styled.View`
    margin-bottom: ${({ theme }) => theme.size(24)};
`;

export const MealContainer = styled.TouchableOpacity`
    border: 1px solid ${({ theme }) => theme.colors.gray_500};
    height: ${({ theme }) => theme.size(37)};
    border-radius: 6px;
    flex-direction: row;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 0px 16px 0px 12px;
    margin-bottom: ${({ theme }) => theme.size(8)};
`;

export const MealHours = styled.Text`
    font-size: ${({ theme }) => theme.size(12)};
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const MealText = styled.Text`
    font-size: ${({ theme }) => theme.size(14)};
    font-family: ${({ theme }) => theme.fonts.regular};
    flex: 1;
    margin-right: ${({ theme }) => theme.size(8)};
`;

export const Divider = styled.View`
    width: 1px;
    height: 40%;
    background-color: ${({ theme }) => theme.colors.gray_400};
    margin-left: ${({ theme }) => theme.size(8)};
    margin-right: ${({ theme }) => theme.size(8)};
`;

export const Infos = styled.View`
    flex-direction: row;
    height: 100%;
    align-items: center;
    flex: 1;
`;

export const Status = styled.View<StatuProps>`
    width: ${({ theme }) => theme.size(14)};
    height: ${({ theme }) => theme.size(14)};
    border-radius: 7px;
    background-color: ${({ theme, isDiet }) =>
        isDiet ? theme.colors.greenMid : theme.colors.redLight};
`;
