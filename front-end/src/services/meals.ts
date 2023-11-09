import { api } from './api';

export async function getUniqueMeals(id: string) {
    try {
        const response = await api.get(`/meals/${id}`);
        return response;
    } catch (error: any) {
        throw new Error(
            error?.response?.data?.message || 'Something went wrong!'
        );
    }
}

export async function deleteUniqueMeals(id: string) {
    try {
        const response = await api.delete(`/meals/${id}`);
        return response;
    } catch (error: any) {
        throw new Error(
            error?.response?.data?.message || 'Something went wrong!'
        );
    }
}

export async function postMeals(data: any) {
    try {
        const response = await api.post('/meals', data);
        return response;
    } catch (error: any) {
        throw new Error(
            error?.response?.data?.message || 'Something went wrong!'
        );
    }
}

export async function putMeals(data: any, id: string) {
    try {
        const response = await api.put(`/meals/${id}`, data);
        return response;
    } catch (error: any) {
        throw new Error(
            error?.response?.data?.message || 'Something went wrong!'
        );
    }
}
