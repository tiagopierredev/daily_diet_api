import styled from 'styled-components/native';

export const Container = styled.Modal`
    flex: 1;
`;

export const Content = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
`;

export const Body = styled.View`
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    padding: ${({ theme }) => theme.size(24)};
    padding-top: ${({ theme }) => theme.size(40)};
    align-items: center;
    width: 90%;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.gray_200};
    font-size: ${({ theme }) => theme.size(18)};
    font-family: ${({ theme }) => theme.fonts.bold};
    text-align: center;
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: ${({ theme }) => theme.size(24)};
`;
