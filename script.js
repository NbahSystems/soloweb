// Funcionalidad de la aplicación
document.getElementById('submitButton').addEventListener('click', function() {
    const inputField = document.getElementById('inputField');
    const output = document.getElementById('output');
    const value = inputField.value;

    if (value.trim() === '') {
        output.textContent = 'Por favor, escribe algo antes de hacer clic.';
    } else {
        output.textContent = `Has escrito: ${value}`;
    }
});
