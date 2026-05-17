import { logUser } from "./login-model.js"

export const loginController = (loginForm) => {
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        let errors = false;

        // Misma lógica que en signup
        // SACAR DATOS DEL FORMULARIO: Constructor de parejas clave/valor con el form 
        const form = new FormData(loginForm);
        const email = form.get('email');
        const password = form.get('password');

        // VALIDAR FORMATO EMAIL
        const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        const isEmailValid = emailRegExp.test(email); // .test() Devuelve un booleano
        if (!isEmailValid) {
            errors = true;
            const logEmailError = new CustomEvent("logEmailFailed", {
                detail: {
                    message: "El email no es válido",
                    type: "alert-danger"
                }
            });

            loginForm.dispatchEvent(logEmailError);
        }

        if (!errors) {
            // Muestra la ruleta de carga
            // y notificación de que está cargándose el inicio de sesión
            const loginStartEvent = new CustomEvent('loginStart', {
                detail: {
                    message: 'Cargando inicio de sesión',
                    type: 'alert-info'
                }
            })
            loginForm.dispatchEvent(loginStartEvent);

            try {
                // logUser devuelve el token 
                const userToken = await logUser(email, password);
                // Guardas el token en local storage
                localStorage.setItem('token', userToken);

                // Notificación éxito 
                const loginSuccessEvent = new CustomEvent("loginSuccess", {
                    detail: {
                        message: "Sesión iniciada correctamente",
                        type: "alert-success"
                    }
                });
                loginForm.dispatchEvent(loginSuccessEvent);
                // Redirección
                setTimeout(() => {
                    window.location = '/';
                }, 1500);
            } catch (error) {
                // Notificación de KO
                const loginErrorEvent = new CustomEvent('loginError', {
                    detail: {
                        message: error.message,
                        type: 'alert-danger'
                    }
                })
                loginForm.dispatchEvent(logFailEvent);
            } finally {
                // Ocultar loader
                loginForm.dispatchEvent(new CustomEvent('loginEnded'));
            }
        }

    })
}