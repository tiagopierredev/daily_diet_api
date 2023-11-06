import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    align-items: center;
    justify-content: center;
`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const FirstBox = styled.View`
    width: 70px;
    height: 70px;
    margin-right: 20px;
`;

export const SecondBox = styled.View``;

export const Logo = styled.Image`
    width: 100%;
    height: 100%;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: 38px;
`;

export const Description = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: 12px;
`;
