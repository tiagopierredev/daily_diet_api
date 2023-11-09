import { api } from './api';

export async function upload(data: any) {
    try {
        const response = await api.post('/upload', {
            base64: data,
        });
        return response;
    } catch (error: any) {
        throw new Error(
            error?.response?.data?.message || 'Something went wrong!'
        );
    }
}
