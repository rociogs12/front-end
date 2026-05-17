import { buildAuthSession, buildUnauthSession } from "./session-view.js";



export const sessionController = (sessionContainer) => {
    const token = localStorage.getItem('token');

    if (token) {
        sessionContainer.innerHTML = buildAuthSession();
        // El botón debe hacer cosas: 
        const logoutBtn = sessionContainer.querySelector('button');
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('token');
        })
    } else {
        sessionContainer.innerHTML = buildUnauthSession();
    }
};