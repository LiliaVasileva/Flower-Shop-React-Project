
const baseUrl = 'http://localhost:8001';

export const login = async (loginData) => {

    try{
        const response = await fetch(`${baseUrl}/login`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
        });

        const result = await response.json()
    
        if (response.status > 204){
            
            throw result
        }
    
        return result

    }catch(error){

        throw error
    }


}


export const register = async (registerData) => {

    try{
        const response = await fetch(`${baseUrl}/register`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(registerData),
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


export const logout = async () => {

    try {
        const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('auth='))?.split('=')[1];

    const auth = token || '{}';

    let headers = {}

    if (auth) {
        headers['X-Authorization'] = auth;
    }

    const response = await fetch(`${baseUrl}/logout`, {
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

    return result

    }catch (error){
        throw error
    }

}
