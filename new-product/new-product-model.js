export const createNewProduct = async (productTitle, productType, productPrice, productImg, productDesc) => {
    // Fetch haciendo post al endpoint del api (sparrest) localhost:8000/auth/register
    const newProductURL = 'http://localhost:8000/api/products2';
    const token = localStorage.getItem('token');

    const response = await fetch(newProductURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`,
        },
        body: JSON.stringify({
            title: productTitle, 
            description: productDesc, 
            price: productPrice, 
            type: productType, 
            image: productImg
        })

    });

};