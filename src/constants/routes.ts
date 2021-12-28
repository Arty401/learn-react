function resource(url: string) {
    return {
        index: url,
        show: (id = ':id') => `${url}/${id}`,
        create: `${url}/add`,
        edit: (id = ':id') => `${url}/edit/${id}`,
    }
}

export const ROUTES = {
    main: '/',
    login: '/login',
    phones: resource(''),
    404: '/404'
}