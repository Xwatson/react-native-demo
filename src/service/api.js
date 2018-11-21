const baseURL = 'http://xxx.com:8888/'

export const UserApi = {
    getUser: (id) =>  baseURL + `user/${id}`
}