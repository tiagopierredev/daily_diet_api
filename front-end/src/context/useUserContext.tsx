import React, { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useMutation } from 'react-query';
import { getMe } from '../services/user';

interface UserProps {
    name: string;
    email: string;
    photo: string;
}

const UserContext = createContext({
    user: null as UserProps | null,
    getUserInfo: async () => {
        return;
    },
    logoutUser: async () => {
        return;
    },
    isLoading: true,
});

export function useUserContext() {
    return useContext(UserContext);
}

export function UserProvider({ children }: any) {
    const [user, setUser] = useState<UserProps | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const { mutateAsync } = useMutation(
        async () => {
            const response = await getMe();
            return response;
        },
        {
            onSuccess: async (response) => {
                setUser(response.data?.user);
                setIsLoading(false);
            },
            onError: (error: any) => {
                setUser(null);
                setIsLoading(false);
            },
        }
    );

    const getUserInfo = async () => {
        const token = await AsyncStorage.getItem('@daily_diet_token');
        if (token) {
            await mutateAsync();
        }
        setIsLoading(false);
    };

    const logoutUser = async () => {
        await AsyncStorage.removeItem('@daily_diet_token');
        setUser(null);
    };

    useEffect(() => {
        getUserInfo();
    }, []);

    return (
        <UserContext.Provider
            value={{ user, getUserInfo, logoutUser, isLoading }}
        >
            {children}
        </UserContext.Provider>
    );
}
