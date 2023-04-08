const request = async (method, url, data) => {
    try {
        const token = document.cookie
            .split('; ')
            .find((row) => row.startsWith('auth='))?.split('=')[1];

        const auth = token || {};

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
                    body: JSON.stringify(data)
                }
            );
        }
        const response = await buildRequest;



        const result = await response.json();

        if (response.status > 204){

            throw result
        }

        return result;

    } catch (error) {
        
        throw error
    }
};

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const patch = request.bind({}, 'PATCH');
export const put = request.bind({}, 'PUT');
export const del = request.bind({}, 'DELETE')