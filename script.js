// Capturamos el formulario y el mensaje de respuesta
const form = document.getElementById('contactForm');
const responseMessage = document.getElementById('responseMessage');

// Manejador del evento de envío
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar recarga de página

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Validar que los campos no estén vacíos
    if (name.trim() === '' || email.trim() === '') {
        alert('Por favor, rellena todos los campos.');
        return;
    }

    // Simular envío de datos
    console.log('Solicitud enviada:', { name, email });

    // Mostrar mensaje de éxito
    responseMessage.style.display = 'block';

    // Resetear el formulario
    form.reset();
});
