import { buildNotification } from "./notifications-view.js";

export const notificationsController = (notificationsContainer) => {
    const notification = document.createElement('div');

    const showNotification = (message, type) => {
        // Texto
        // Construyo la vista = buildNotification(); 
        // la incluyo en el dom

        notification.innerHTML = buildNotification(message, type);
        notificationsContainer.appendChild(notification);
        setTimeout(() => {
            notification.remove();
        }, 2000);
    }

    const hideNotification = () => {
        notification.innerHTML = ``;
    }

    return {
        showNotification,
        hideNotification
    }
}