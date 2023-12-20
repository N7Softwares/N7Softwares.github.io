const form = document.querySelector('#contactform');

form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();

    // Valida que los campos requeridos no estén vacíos
    if (!form.checkValidity()) {
        // Bootstrap mostrará los mensajes de error automáticamente
        return;
    }

    // Muestra el boton de carga
    const submitButton = form.querySelector('#submit');
    const loadingButton = document.createElement('button');
    loadingButton.classList.add('sign-in', 'btn', 'btn-danger', 'text-white', 'rounded-0', 'disabled', 'd-block', 'w-100');
    loadingButton.setAttribute("style", "height: 45px; font-size: 20px;");
    loadingButton.innerHTML = `
        <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
        <span rol="status">Loading...</span>
    `;

    submitButton.replaceWith(loadingButton);

    try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
    
            setTimeout(() => {
                loader.remove();

                loadingButton.replaceWith(submitButton);

            }, 3000);

            Swal.fire({
                    title: "Éxito",
                    text: "Mensaje enviado correctamente",
                    icon: "success",
                    backdrop: true,
                    timer: 3000,
                    allowOutsideClick: false,
                    showConfirmButton: false
            });
                    
            setTimeout(() => {
                //Recarga la pagina
                location.reload();
            }, 3000);

        } else {
            throw new Error('Error en la solicitud');
        }
    } catch (error) {
        console.error(error);

        // Maneja el error
        loader.remove();
        Swal.fire({
            title: "Error",
            text: "Hubo un error al enviar el mensaje",
            icon: "error",
        });
    }
}