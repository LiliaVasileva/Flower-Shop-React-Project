
const baseUrl = 'http://localhost:8000';

export const login = async (loginData) => {
    console.log('inside login')
    console.log(loginData)
    const response = await fetch(`${baseUrl}/login`,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });
    console.log(response)
}

