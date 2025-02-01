// API Key de Pexels
const apiKey = 'afYl9KaoBrIzf78EpE1Mv6ViTThc51NB3r6qhwfHRhrE1N8Ei9QI8194';

// Array de temas y sus palabras clave para buscar imágenes en Pexels
const topics = [
    { id: 'html-css', query: 'HTML CSS' },
    { id: 'javascript', query: 'JavaScript' },
    { id: 'frontend-frameworks', query: 'Frontend Frameworks' },
    { id: 'backend-development', query: 'Backend Development' },
    { id: 'databases', query: 'Databases' },
    { id: 'apis-restful', query: 'APIs' },
    { id: 'web-security', query: 'Web Security' },
    { id: 'responsive-design', query: 'Responsive Design' },
    { id: 'deployment-hosting', query: 'Deployment Hosting' },
    { id: 'performance-optimization', query: 'Performance Optimization' }
];

// Función para obtener imágenes de Pexels
async function fetchImages(topicId, query) {
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=6`;
    const response = await fetch(url, {
        headers: {
            Authorization: apiKey
        }
    });

    if (!response.ok) {
        console.error('Error al cargar imágenes:', response.statusText);
        return [];
    }

    const data = await response.json();
    return data.photos;
}

// Función para renderizar imágenes en la página
function renderImages(topicId, images) {
    const container = document.querySelector(`#${topicId} .image-container`);
    container.innerHTML = ''; // Limpiar contenedor

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src.medium;
        imgElement.alt = image.photographer;
        container.appendChild(imgElement);
    });
}

// Cargar imágenes para cada tema
async function loadImages() {
    for (const topic of topics) {
        const images = await fetchImages(topic.id, topic.query);
        renderImages(topic.id, images);
    }
}

// Iniciar la carga de imágenes cuando se cargue la página
document.addEventListener('DOMContentLoaded', loadImages);
