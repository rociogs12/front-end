import { createNewProduct } from "./new-product-model.js";
import { buildNewProductForm } from "./new-product-view.js";

export const newProductController = (newProductContainer) => {
    const token = localStorage.getItem('token');

    if (token) {
        newProductContainer.innerHTML = buildNewProductForm();
        const form = newProductContainer.querySelector('form');

        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const formData = new FormData(form);
            const productTitle = formData.get('title');
            const productType = formData.get('type');
            const productPrice = formData.get('price');
            const productImg = formData.get('image');
            const productDesc = formData.get('description');

            try {
                await createNewProduct(productTitle, productType, productPrice, productImg, productDesc);
                const newProductEvent = new CustomEvent('newProductCreated');
                newProductContainer.dispatchEvent(newProductEvent);
            } catch(error){
                alert('error') // Implementar notificaciones
            }
        })
    }
}