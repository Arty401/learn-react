export const STORAGE_KEYS = {
    _token: '_token',
}


export const getStorageValue = (key: keyof typeof STORAGE_KEYS) => localStorage.getItem(STORAGE_KEYS[key]);

export const setStorageValue = (key: keyof typeof STORAGE_KEYS, value?: string) => {
    value && localStorage.setItem(STORAGE_KEYS[key], value);
};

export const clearStorageValue = (key: keyof typeof STORAGE_KEYS) => localStorage.removeItem(STORAGE_KEYS[key]);
