import * as request from './requester'
const baseUrl = 'http://localhost:8001';

export const create = (createData, token) => request.post(`${baseUrl}/item/create`, createData, token);

export const getAll = async () => {

    const response = await fetch(`${baseUrl}/item/items`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    let result = response.clone().json()

    return result

}