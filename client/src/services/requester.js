import jwtDecode from 'jwt-decode'
const request = async (method, url, data) => {
    try {
        const token = document.cookie
            .split('; ')
            .find((row) => row.startsWith('auth='))?.split('=')[1];
        console.log(token)

        const auth = token || '{}';

        const user = jwtDecode(token);

        console.log(user)

        let headers = {}

        if (auth) {
            headers['X-Authorization'] = auth;
        }

        let buildRequest;

        if (method === 'GET') {
            buildRequest = fetch(url, {headers});
        } else {
            buildRequest = fetch(url, {
                    method,
                    headers: {
                        ...headers,
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data),
                    cookies: {
                        'auth': 'this is a test',
                    },
                }
            );
        }
        const response = await buildRequest;

        console.log(response);

        const result = await response.json();

        return result;
    } catch (error) {
        console.log(error);
    }
};

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const patch = request.bind({}, 'PATCH');
export const put = request.bind({}, 'PUT');
export const del = request.bind({}, 'DELETE')