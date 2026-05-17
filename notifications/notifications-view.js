
export const buildNotification = (message, type) => {
    return `<div class="alert ${type}" role="alert">${message}</div>`; 
}