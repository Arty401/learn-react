export interface IUser {
    name: string,
    email: string,
    id: number,
    _token: string
}

export type AuthInitialState = {
    user: IUser | null,
    isLoading: boolean,
    errors: Array<object> | null
}