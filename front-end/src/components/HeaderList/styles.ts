import styled from 'styled-components/native';

export const Container = styled.View``;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.size(16)};
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.gray_100};
    margin-bottom: ${({ theme }) => theme.size(8)};
`;
