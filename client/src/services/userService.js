import {getToken} from "../utils/getToken";

const baseUrl = 'http://localhost:8001';

export const getUserComments = async (userId) => {
    const token = getToken()

    const auth = token || '{}';

    let headers = {}

    if (auth) {
        headers['X-Authorization'] = auth;
    }

    const response = await fetch(`${baseUrl}/items/${userId}/comments`, {
        method: "GET",
        mode: "cors",
        headers: {
            ...headers,
            "Content-Type": "application/json",
        }
    });
    return response.json();
};


export const getUser = async (userId) => {
    try{
        const token = getToken()

        const auth = token || '{}';
    
        let headers = {}
    
        if (auth) {
            headers['X-Authorization'] = auth;
        }
    
        const response = await fetch(`${baseUrl}/profile/${userId}`, {
            method: "GET",
            mode: "cors",
            headers: {
                ...headers,
                "Content-Type": "application/json",
            }
        });

        const result = await response.json();

        if (response.status > 204){

            throw result
        }

        return result;
    }catch(error){
        return error
    }
}



