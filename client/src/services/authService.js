import * as request from './requester'
const baseUrl = 'http://localhost:8001';

export const login = async (loginData) => {

    const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
    });
    return response.json();
}


export const register = async (registerData) => {
    const response = await fetch(`${baseUrl}/register`, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
    });
    return response.json();
}

export const logout = async () => {

    const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('auth='))?.split('=')[1];

    const auth = token || '{}';

    let headers = {}

    if (auth) {
        headers['X-Authorization'] = auth;
    }

    const response = await fetch(`${baseUrl}/logout`, {
        method: "GET",
        mode: "cors",
        headers: {
            ...headers,
            "Content-Type": "application/json",
        }
    });
    return response.json();
}
