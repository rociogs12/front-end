// ORQUESTADOR
import { loaderController } from "./loader/loader-controller.js";
import { productsListController } from "./products/product-list-controller.js";
import { notificationsController } from "./notifications/notifications-controller.js";
import { newProductController } from "./new-product/new-product-controller.js";
import { sessionController } from "./session/session-controller.js";

// LISTA DE PRODUCTOS:

// Llamada al controlador: 
const productsContainer = document.querySelector('.products-container');
const loaderContainer = document.querySelector('.loader-container');
const notificationsContainer = document.querySelector('.notifications-container');
const newProductContainer = document.querySelector('.new-product-container');
const sessionContainer = document.querySelector('.session-container');


const { showLoader, hideLoader } = loaderController(loaderContainer);
// Escuchador de evento (Siempre antes que el disparador): 
productsContainer.addEventListener("loadingProductsStarted", showLoader);
productsContainer.addEventListener("loadingProductsEnded", hideLoader);

const { showNotification, hideNotification } = notificationsController(notificationsContainer);
// Escuchador del evento para notificación si falla la carga de productos: 

const handleNotification = (event) => {
    const { message, type } = event.detail;
    showNotification(message, type);
};

productsContainer.addEventListener("loadingProductsStarted", handleNotification);
productsContainer.addEventListener("loadingProductsFailed", handleNotification);
productsContainer.addEventListener("loadingProductsEnded", handleNotification);

// Recargar los productos cuando se añada uno nuevo
newProductContainer.addEventListener("newProductCreated", () => {
   productsListController(productsContainer);
})

// Controlador para el navbar

productsListController(productsContainer);
newProductController(newProductContainer);
sessionController(sessionContainer)

