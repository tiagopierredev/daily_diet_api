import styled from 'styled-components/native';

interface ContentProps {
    insets: {
        top: number;
        bottom: number;
    };
}

export const Content = styled.View<ContentProps>`
    flex: 1;
    padding: 24px;
    padding-top: ${({ insets }) => insets.top + 16}px;
    padding-bottom: ${({ insets }) => insets.bottom}px;
    position: relative;
`;

export const CardContainer = styled.View`
    margin-top: ${({ theme }) => theme.size(24)};
`;

export const List = styled.FlatList`
    margin-top: ${({ theme }) => theme.size(32)};
    flex: 1;
`;

export const ListHeaderContainer = styled.View`
    margin-top: ${({ theme }) => theme.size(32)};
`;

export const EmptyList = styled.Text`
    font-size: ${({ theme }) => theme.size(16)};
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.gray_100};
`;
