import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    width: ${({ theme }) => theme.size(82)};
    height: ${({ theme }) => theme.size(37)};
    align-self: center;
    margin-bottom: ${({ theme }) => theme.size(8)};
`;
