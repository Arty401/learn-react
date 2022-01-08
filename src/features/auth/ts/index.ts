export interface IUser {
    name: string,
    email: string,
    id: number,
}


export interface AuthLoginResponse {
    user: IUser,
    _token: string
}

export type AuthParams = {
    email: string;
    password: string;
}

export type AuthInitialState = {
    user: IUser | null,
    isLoading: boolean,
    errors: {
        message: string
    } | null
}
