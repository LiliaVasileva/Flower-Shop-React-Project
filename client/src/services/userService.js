import * as request from "./requester";
import {getToken} from "../utils/getToken";

const baseUrl = 'http://localhost:8001';
export const getUser = async (userId) => {

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
    return response.json();
};

