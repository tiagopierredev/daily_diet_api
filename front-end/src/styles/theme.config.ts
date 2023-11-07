import { RFValue } from 'react-native-responsive-fontsize';

export const theme = {
    colors: {
        redDark: '#BF3B44',
        redMid: '#F3BABD',
        redLight: '#F4E6E7',
        greenDark: '#639339',
        greenMid: '#CBE4B4',
        greenLight: '#E5F0DB',
        gray_100: '#1B1D1E',
        gray_200: '#333638',
        gray_300: '#5C6265',
        gray_400: '#B9BBBC',
        gray_500: '#DDDEDF',
        gray_600: '#EFF0F0',
        gray_700: '#FAFAFA',
        white: '#FFFFFF',
    },
    fonts: {
        regular: 'NunitoSans_400Regular',
        bold: 'NunitoSans_700Bold',
    },
    size: (size: number) => `${RFValue(size)}px`,
};
