import * as request from './requester'
const baseUrl = 'http://localhost:8001';

export const create = (createData, token) => request.post(`${baseUrl}/item/create`, createData, token);

