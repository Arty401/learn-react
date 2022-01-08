import axios from 'axios';

export const api = axios.create();

api.interceptors.request.use(
    config => {
        const authToken = localStorage.getItem('_token')
        if (config.headers) {
            if (authToken) {
                config.headers['Authorization'] = `Bearer ${authToken}`
            }
        }
        return config;
    },
    error => {
        Promise.reject(error);
    }
);
