
import { createUser } from "./signup-model.js";

export const signupController = (signupForm) => {
    // validar el formato del email
    // las password tienen que tener 6 carácteres
    signupForm.addEventListener('submit', async (event) => {
        // EVITAR ACTUACIÓN POR DEFECTO DE SUBMIT
        event.preventDefault();
        let errors = false; // Asumimos que no hay errores
        console.log('toca validar datos.')

        // SACAR DATOS DEL FORMULARIO: Constructor de parejas clave/valor con el form 
        const form = new FormData(signupForm);
        const email = form.get('email');
        const password = form.get('password');
        const confirmPassword = form.get('confirm-password');

        // VALIDAR FORMATO EMAIL
        const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        const isEmailValid = emailRegExp.test(email); // .test() Devuelve un booleano
        if (!isEmailValid) {
            //mal
            errors = true;
            alert('El email no es válido.');

        }

        // VALIDAR COINCIDENCIA CONTRASEÑAS
        if (password !== confirmPassword) {
            //mal
            errors = true;
            alert('Las contraseñas no coinciden.');
        }

        if (!errors) {
            try {
                await createUser(email, password);
                // Notificación de que fue bien 
                const userCreatedEvent = new CustomEvent('userCreated', {
                    detail: {
                        message: 'Usuario creado correctamente',
                        type: 'alert-success'
                    }
                })
                signupForm.dispatchEvent(userCreatedEvent);
                setTimeout(() => {
                    window.location = '/';
                }, 1500);
            } catch (error) {
                // Notificación de KO
                const userNotCreatedEvent = new CustomEvent('userNotCreated', {
                    detail: {
                        message: error.message,
                        type: 'alert-danger'
                    }
                })
                signupForm.dispatchEvent(userNotCreatedEvent);
            }

        }
        // Pruebas 
        console.log(form.get('email'));
        console.log(form.get('password'));
        console.log(form.get('confirm-password'));
    })
}