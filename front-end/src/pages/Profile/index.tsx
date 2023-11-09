import React from 'react';
import * as S from './styles';
import { ArrowLeft } from 'phosphor-react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../styles/theme.config';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button';
import { UserIcon } from '../../assets/images/userIcon';
import { Camera, SignOut } from 'phosphor-react-native';
import { useUserContext } from '../../context/useUserContext';
import * as ImagePicker from 'expo-image-picker';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useMutation } from 'react-query';
import { putMe } from '../../services/user';
import { Alert } from 'react-native';
import { upload } from '../../services/upload';

const schema = yup
    .object({
        email: yup
            .string()
            .required('E-mail é obrigatório')
            .email('E-mail inválido'),
        name: yup.string().required('Nome é obrigatorio'),
    })
    .required();

export function Profile() {
    const { user, logoutUser } = useUserContext();
    const [photo, setPhoto] = React.useState<string | null>(user?.photo || '');
    const [base64Photo, setBase64Photo] = React.useState<string | null>();

    const { control, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });
    const { getUserInfo } = useUserContext();
    const navigation: any = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    function handlePasswordView() {
        navigation.navigate('ProfilePassword');
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true,
        });

        if (!result.canceled) {
            setBase64Photo(result.assets[0].base64);
            setPhoto(result.assets[0].uri);
        }
    };

    function renderUserPhoto() {
        if (photo) {
            return <S.UserPhoto source={{ uri: photo }} />;
        } else {
            return <UserIcon />;
        }
    }

    const { mutateAsync, isLoading } = useMutation(
        async (data: any) => {
            const response = await putMe(data);
            return response;
        },
        {
            onSuccess: async () => {
                Alert.alert(
                    'Atualizado!',
                    'Seu perfil foi atualizado com sucesso!'
                );
                await getUserInfo();
            },
            onError: (error: any) => {
                alert(error.message);
            },
        }
    );

    const uploadMutation = useMutation(
        async (data: any) => {
            const response = await upload(data.photo);
            return {
                ...data,
                photo: response.data.url,
            };
        },
        {
            onSuccess: async (data) => {
                await mutateAsync(data);
            },
            onError: (error: any) => {
                alert(error.message);
            },
        }
    );

    async function onSubmit(data: any) {
        if (base64Photo) {
            data.photo = base64Photo;

            return await uploadMutation.mutateAsync(data);
        }

        return await mutateAsync(data);
    }

    return (
        <S.Container>
            <S.Header insets={useSafeAreaInsets()}>
                <S.ButtonGoBack onPress={handleGoBack}>
                    <ArrowLeft
                        color={theme.colors.gray_200}
                        weight="regular"
                        size={RFValue(24)}
                    />
                </S.ButtonGoBack>
                <S.Title>Meu perfil</S.Title>
            </S.Header>
            <S.Content>
                <S.Form>
                    <S.ButtonPhotoProfile onPress={pickImage}>
                        {renderUserPhoto()}
                        <S.CamIcon>
                            <Camera color={theme.colors.white} />
                        </S.CamIcon>
                    </S.ButtonPhotoProfile>
                    <Input
                        placeholder="Nome"
                        control={control}
                        name="name"
                        defaultValue={user?.name}
                    />
                    <Input
                        placeholder="E-mail"
                        control={control}
                        name="email"
                        defaultValue={user?.email}
                    />
                    <S.ButtonContainer>
                        <S.PasswordButton onPress={handlePasswordView}>
                            <S.PasswordText>Alterar senha</S.PasswordText>
                        </S.PasswordButton>
                        <S.PasswordButtonLogOut onPress={logoutUser}>
                            <SignOut color={theme.colors.redDark} />
                            <S.PasswordButtonLogOutText>
                                Sair
                            </S.PasswordButtonLogOutText>
                        </S.PasswordButtonLogOut>
                    </S.ButtonContainer>
                </S.Form>
                <Button
                    title="Salvar"
                    onPress={handleSubmit(onSubmit)}
                    disabled={isLoading || uploadMutation.isLoading}
                    isLoading={isLoading || uploadMutation.isLoading}
                />
            </S.Content>
        </S.Container>
    );
}
