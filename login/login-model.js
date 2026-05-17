
export const logUser = async (email, password) => {
    // Fetch haciendo post al endpoint del api (sparrest) localhost:8000/auth/register
    const logURL = 'http://localhost:8000/auth/login';
    const response = await fetch(logURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: email,
            password
        })

    });
    
    const userData = await response.json();

    if (!response.ok) {
        // Esta respuesta solo es necesaria si el registro no va mal
        throw new Error(userData.message);
    } else {
        return userData.accessToken;
    }

};