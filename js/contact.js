// Función para enviar el correo electrónico//
function sendEmail() {
    // Capturamos los valores del formulario ///
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validamos que los campos no estén vacíos //
    if (email && message) {
        // Simulamos el envío de un correo electrónico//
        alert(`Correo enviado a ${email} con el mensaje: "${message}"`);
        
        // Limpiar campos después de enviar //
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } else {
        alert('Por favor, completa todos los campos.');
    }
}