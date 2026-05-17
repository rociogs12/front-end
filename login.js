import { loaderController } from "./loader/loader-controller.js";
import { notificationsController } from "./notifications/notifications-controller.js";
import { loginController } from "./login/login-controller.js";


// Nodo del DOM para loginController:
const loginForm = document.querySelector('form');
// Nodo del DOM para loaderController: 
const loaderContainer = document.querySelector('.loader-container');
// Nodo del DOM para notificationsController:
const notificationsContainer = document.querySelector('.notifications-container');

const { showLoader, hideLoader } = loaderController(loaderContainer);
const { showNotification } = notificationsController(notificationsContainer);

// LOADER
loginForm.addEventListener('loginStart', showLoader);
loginForm.addEventListener('loginEnded', hideLoader);

// NOTIFICATIONS
// Escuchador del evento para lanzar una notificicación 
const handleNotification = (event) => {
    const { message, type } = event.detail;
    showNotification(message, type);
};
// Notificación de cargando
loginForm.addEventListener("loginStart", handleNotification);
// Notificación de éxito
loginForm.addEventListener("loginSuccess", handleNotification);
// Notificación de fallo
loginForm.addEventListener("loginError", handleNotification);


// Ejecutar el controlador
loginController(loginForm);