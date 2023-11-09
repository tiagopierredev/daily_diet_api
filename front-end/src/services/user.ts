import { api } from './api';

interface userRegister {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
}

interface userLogin {
    email: string;
    password: string;
}

export async function userRegister(data: userRegister) {
    try {
        const response = await api.post('/register', data);
        return response;
    } catch (error: any) {
        throw new Error(
            error?.response?.data?.message || 'Something went wrong!'
        );
    }
}

export async function userLogin(data: userLogin) {
    try {
        const response = await api.post('/token', data);
        return response;
    } catch (error: any) {
        throw new Error(
            error?.response?.data?.message || 'Something went wrong!'
        );
    }
}

export async function getMe() {
    try {
        const response = await api.get('/me');
        return response;
    } catch (error: any) {
        throw new Error(
            error?.response?.data?.message || 'Something went wrong!'
        );
    }
}

export async function putMe(data: any) {
    try {
        const response = await api.put('/me', data);
        return response;
    } catch (error: any) {
        throw new Error(
            error?.response?.data?.message || 'Something went wrong!'
        );
    }
}

export async function getDashboard() {
    try {
        const response = await api.get('/dashboard');
        return response;
    } catch (error: any) {
        throw new Error(
            error?.response?.data?.message || 'Something went wrong!'
        );
    }
}
