// API Key de Pexels
const apiKey = 'afYl9KaoBrIzf78EpE1Mv6ViTThc51NB3r6qhwfHRhrE1N8Ei9QI8194';

// Función para obtener imágenes de Pexels
async function fetchImages(query) {
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=5`;
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

// Función para crear el slider
function createSlider(images) {
    const slidesContainer = document.querySelector('.slides');
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src.medium;
        imgElement.alt = image.photographer;
        slidesContainer.appendChild(imgElement);
    });
}

// Configuración del slider
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slides img');
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

document.addEventListener('DOMContentLoaded', async () => {
    // Obtener imágenes relacionadas con "trading" y "Bitcoin"
    const tradingImages = await fetchImages('trading');
    const bitcoinImages = await fetchImages('Bitcoin');

    // Combinar las imágenes
    const combinedImages = [...tradingImages, ...bitcoinImages];

    // Crear el slider
    createSlider(combinedImages);

    // Inicializar el slider
    const totalSlides = combinedImages.length;
    showSlide(currentIndex);

    // Botones de navegación
    document.querySelector('.prev-btn').addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    document.querySelector('.next-btn').addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });
});
