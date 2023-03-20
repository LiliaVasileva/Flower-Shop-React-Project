
const baseUrl = 'http://localhost:8000'

export const create = async (userData) => {
    console.log("Inside create")
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
    console.log(result.user)

    return result.user
}