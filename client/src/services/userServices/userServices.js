
const baseUrl = 'http://localhost:8000'

export const create = async (userData) => {
    const response = await fetch(
        `${baseUrl}/register`,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
    const result = await response.json();

    return result.user
}