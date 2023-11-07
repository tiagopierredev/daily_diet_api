import styled, { css } from 'styled-components/native';

interface InputProps {
    multiline?: boolean;
}

interface ContainerProps {
    width?: string;
}

export const Container = styled.View<ContainerProps>`
    margin-bottom: ${({ theme }) => theme.size(4)};
    width: 100%;
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.size(14)};
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.gray_200};
    margin-bottom: ${({ theme }) => theme.size(8)};
`;

export const Input = styled.TextInput<InputProps>`
    font-size: ${({ theme }) => theme.size(16)};
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.gray_200};
    border: 1px solid ${({ theme }) => theme.colors.gray_400};
    height: ${({ theme }) => theme.size(48)};
    border-radius: 6px;
    padding: 0px ${({ theme }) => theme.size(12)};
    ${({ multiline, theme }) =>
        multiline &&
        css`
            height: ${theme.size(120)};
            padding-top: ${theme.size(12)};
            padding-bottom: ${theme.size(12)};
        `}
`;

export const ErrorText = styled.Text`
    font-size: ${({ theme }) => theme.size(11)};
    height: ${({ theme }) => theme.size(16)};
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.redDark};
    margin-top: ${({ theme }) => theme.size(4)};
`;
