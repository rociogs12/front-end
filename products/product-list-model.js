// MODEL que tira de Sparrest

export const getProducts = async () => {
    // Fetch al endpoint de sparrest localhost:8000/api/products
    const response = await fetch('http://localhost:8000/api/products2?_expand=user');
    // Almacenarlo en una constante y luego exportarlo
    const products = await response.json();

    return products; 
}