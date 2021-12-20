export const login = ({email, password}: {email: string, password: string}) => ({
    type: 'LOGIN',
    email,
    password,
})