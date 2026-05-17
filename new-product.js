import { loaderController } from "./loader/loader-controller.js";
import { notificationsController } from "./notifications/notifications-controller.js";
import { newProductController } from "./new-product/new-product-controller.js";
import { sessionController } from "./session/session-controller.js";

// Nodo del DOM para newProductController:
const newProductForm = document.querySelector('.newproduct-form-container');
// Nodo del DOM para loaderController: 
const loaderContainer = document.querySelector('.loader-container');
// Nodo del DOM para notificationsController:
const notificationsContainer = document.querySelector('.notifications-container');

const { showLoader, hideLoader } = loaderController(loaderContainer);
const { showNotification } = notificationsController(notificationsContainer);

const handleNotification = (event) => {
    const { message, type } = event.detail;
    showNotification(message, type);
};

newProductForm.addEventListener("logFailed", handleNotification);

//
sessionController();
// Ejecutar el controlador
newProductController(newProductForm);
