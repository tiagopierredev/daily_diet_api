import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.gray_500};
`;

export const Content = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        flex: 1,
        justifyContent: 'center',
    },
})`
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

export const OrText = styled.Text`
    font-size: ${({ theme }) => theme.size(14)};
    font-family: ${({ theme }) => theme.fonts.bold};
    margin-bottom: ${({ theme }) => theme.size(8)};
    margin-top: ${({ theme }) => theme.size(8)};
    text-align: center;
`;

export const ButtonsContainer = styled.View`
    margin-top: ${({ theme }) => theme.size(24)};
`;

export const Logo = styled.Image`
    width: ${({ theme }) => theme.size(82)};
    height: ${({ theme }) => theme.size(37)};
    align-self: center;
    margin-bottom: ${({ theme }) => theme.size(8)};
`;

export const Description = styled.Text`
    color: ${({ theme }) => theme.colors.gray_100};
    font-size: ${({ theme }) => theme.size(14)};
    font-family: ${({ theme }) => theme.fonts.regular};
    text-align: center;
    margin-bottom: ${({ theme }) => theme.size(40)};
`;
