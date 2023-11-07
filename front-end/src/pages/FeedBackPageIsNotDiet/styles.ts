import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    padding: ${({ theme }) => theme.size(16)};
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.redDark};
    font-size: ${({ theme }) => theme.size(24)};
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.bold};
    margin-bottom: ${({ theme }) => theme.size(8)};
`;

export const Description = styled.Text`
    color: ${({ theme }) => theme.colors.gray_100};
    font-size: ${({ theme }) => theme.size(16)};
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.regular};
    margin-bottom: ${({ theme }) => theme.size(24)};
`;

export const Ilustration = styled.Image`
    width: ${({ theme }) => theme.size(224)};
    height: ${({ theme }) => theme.size(288)};
    align-self: center;
    margin-bottom: ${({ theme }) => theme.size(24)};
`;

export const ButtonContainer = styled.View`
    align-self: center;
`;
