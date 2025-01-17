// Inicializar EmailJS
emailjs.init("TU_USER_ID"); // Reemplaza con tu User ID de EmailJS

const form = document.getElementById('contactForm');
const responseMessage = document.getElementById('responseMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar recarga de página

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Validar campos vacíos
    if (name.trim() === '' || email.trim() === '') {
        alert('Por favor, rellena todos los campos.');
        return;
    }

    // Parámetros para enviar el correo
    const templateParams = {
        from_name: name,
        from_email: email,
        to_email: "hackingeticospain@gmail.com",
        message: `Nueva solicitud de web. Nombre: ${name}, Correo: ${email}`,
    };

    // Enviar correo con EmailJS
    emailjs.send("TU_SERVICE_ID", "TU_TEMPLATE_ID", templateParams)
        .then(function(response) {
            console.log('Correo enviado con éxito', response.status, response.text);
            responseMessage.textContent = '¡Gracias por tu solicitud! Te contactaremos pronto.';
            responseMessage.style.display = 'block';
            form.reset();
        }, function(error) {
            console.error('Error al enviar el correo:', error);
            alert('Ocurrió un error al enviar tu solicitud. Por favor, inténtalo más tarde.');
        });
});
