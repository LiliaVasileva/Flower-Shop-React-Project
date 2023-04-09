import * as request from './requester'


const baseUrl = 'http://localhost:8001';

export const create = (createData) => request.post(`${baseUrl}/item/create`, createData);

export const addComment = (itemId, commentData) => request.post(`${baseUrl}/items/${itemId}/comment`, commentData);

export const edit = (itemId, itemData) => request.post(`${baseUrl}/items/${itemId}/edit`, itemData);

export  const deleteItem = (itemId) => request.del(`${baseUrl}/items/${itemId}/delete`);

export const getAll = async () => {

    const response = await fetch(`${baseUrl}/items`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    let result = response.clone().json()

    return result

}

export const getOne = async (itemId) => {

    try{

    const response = await fetch(`${baseUrl}/items/${itemId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    const result = await response.json()
    
    if (response.status > 204){

        throw result
    }

    return result

}catch (error){

    throw error
}

}



