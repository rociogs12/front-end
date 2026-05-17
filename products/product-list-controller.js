// CONTROLADOR: 
// Responsabilidades:
//      Generación de datos 
//      Obtención de vista
import { getProducts } from "./product-list-model.js";
import { productContent } from "./product-list-view.js";

export const productsListController = async (productsContainer) => {
    // Inicio un array products para poder usarlo en finally 
    // en el try se rellena o no 
    // en el finally para da una notificación u otra
    productsContainer.innerHTML = ``;
    
    let products = [];

    try {
        // Mostrar ruleta - Disparador de evento: loadingProductsStarted
        const loadingProductsEvent = new CustomEvent("loadingProductsStarted", {
            detail: {
                message: 'Se están cargando los productos.',
                type: 'alert-info'
            }
        });
        productsContainer.dispatchEvent(loadingProductsEvent);

        // Guardar los productos devueltos por getProducts en el modelo
        products = await getProducts();
        // Llama a showProducts dándole los productos devueltos y los pinta
        showProducts(products, productsContainer);
    } catch (error) {
        const productsFailedEvent = new CustomEvent("loadingProductsFailed", {
            detail: {
                message: 'No ha sido posible obtener productos.',
                type: 'alert-danger'
            }
        });
        productsContainer.dispatchEvent(productsFailedEvent);

    } finally {
        // Ocultar ruleta - Disparador de evento: loadingProductsEnded 
        // Comprobar si hay o no products con products.length
        const isEmpty = products.length === 0;

        const loadedProductsEvent = new CustomEvent("loadingProductsEnded", {
            detail: {
                message: isEmpty
                    ? 'No hay productos.'
                    : 'Se han cargado todos los productos.',
                type: isEmpty
                    ? 'alert-primary'
                    : 'alert-success'
            }
        });

        productsContainer.dispatchEvent(loadedProductsEvent);
    }
}


// Recibe los productos de getProducts y los pinta al ser llamada
const showProducts = (products, productsContainer) => {
    // Por cada producto: 
    products.forEach(product => {

        // Crear el div de product desde el view
        const showProduct = productContent(product);

        // Añadir los productos al section 
        productsContainer.appendChild(showProduct);
    });
}