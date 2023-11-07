import { css } from 'styled-components';
import styled from 'styled-components/native';

interface ContainerProps {
    color: 'light' | 'dark' | 'default';
    width?: string;
}

interface TitleProps {
    isPercentage?: boolean;
}

export const Container = styled.View<ContainerProps>`
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: ${({ theme }) => theme.size(24)} ${({ theme }) => theme.size(8)};
    ${({ width }) => width && `width: ${width}`};
    ${({ theme, color }) =>
        color === 'light' &&
        css`
            background-color: ${theme.colors.greenLight};
        `}
    ${({ theme, color }) =>
        color === 'dark' &&
        css`
            background-color: ${theme.colors.redLight};
        `}
    ${({ theme, color }) =>
        color === 'default' &&
        css`
            background-color: ${theme.colors.gray_600};
        `}
`;

export const Title = styled.Text<TitleProps>`
    font-size: ${({ theme }) => theme.size(24)};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.gray_100};
    font-family: ${({ theme }) => theme.fonts.bold};
    ${(props) =>
        props.isPercentage &&
        css`
            font-size: ${({ theme }) => theme.size(32)};
        `}
`;

export const Description = styled.Text`
    font-size: ${({ theme }) => theme.size(14)};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.gray_200};
    font-family: ${({ theme }) => theme.fonts.regular};
    text-align: center;
`;

export const Button = styled.TouchableOpacity`
    position: absolute;
    top: ${({ theme }) => theme.size(10)};
    right: ${({ theme }) => theme.size(10)};
`;
