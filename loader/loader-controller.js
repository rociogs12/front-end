import { buildLoader } from "./loader-view.js"

export const loaderController = (loaderContainer) => {
    const showLoader = () => {
        const loader = buildLoader();
        loaderContainer.innerHTML = loader;
    }

    const hideLoader = () => {
        loaderContainer.innerHTML = ''; 
    }

    return {
        showLoader, 
        hideLoader
    }
}