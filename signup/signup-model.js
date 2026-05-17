
export const createUser = async (email, password) => {
    // Fetch haciendo post al endpoint del api (sparrest) localhost:8000/auth/register
    const registerURL = 'http://localhost:8000/auth/register';
    const response = await fetch(registerURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: email,
            password
        })

    });

    if (!response.ok) {
        // Esta respuesta solo es necesaria si el registro no va mal
        const userData = await response.json();
        throw new Error(userData.message);
    }

};