import styled, { css } from 'styled-components/native';

interface OutlinedProps {
    outlined?: boolean;
}

export const Container = styled.TouchableOpacity<OutlinedProps>`
    background-color: ${({ theme, outlined }) =>
        outlined ? theme.colors.white : theme.colors.gray_200};
    height: ${({ theme }) => theme.size(50)};
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: ${({ theme }) => theme.size(12)};
    ${({ outlined }) =>
        outlined &&
        css`
            border: 1px solid ${({ theme }) => theme.colors.gray_200};
        `}
`;

export const Title = styled.Text<OutlinedProps>`
    font-size: ${({ theme }) => theme.size(14)};
    color: ${({ theme, outlined }) =>
        outlined ? theme.colors.gray_200 : theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const IconContainer = styled.View`
    margin-right: 10px;
`;
