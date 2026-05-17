import { signupController } from "./signup/signup-controller.js";
import { notificationsController } from "./notifications/notifications-controller.js";

// Nodo del DOM para signUpController:
const signupForm = document.querySelector('form');
// Nodo del DOM para notificationsController:
const notificationsContainer = document.querySelector('.notifications-container');

signupForm.addEventListener('userCreated', (event) => {
    showNotification(event.detail.message, event.detail.type);
});
signupForm.addEventListener('userNotCreated', (event) => {
    showNotification(event.detail.message, event.detail.type);
});
const { showNotification } = notificationsController(notificationsContainer);

signupController(signupForm);
