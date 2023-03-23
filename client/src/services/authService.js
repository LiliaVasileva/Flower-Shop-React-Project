import * as request from './requester'
const baseUrl = 'http://localhost:8001';

export const login = (loginData) => request.post(`${baseUrl}/login`, loginData)


export const register = (registerData) => request.post(`${baseUrl}/register`, registerData)