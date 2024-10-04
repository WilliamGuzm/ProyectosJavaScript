document.getElementById('recommendationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener valores de la edad y el género
    const age = parseInt(document.getElementById('age').value);
    const genre = document.getElementById('genre').value;
    let recommendation = '';

    // Recomendaciones basadas en la edad y el género
    switch (genre) {
        case 'accion':
            if (age < 18) {
                recommendation = 'Te recomendamos "Los Increíbles".';
            } else {
                recommendation = 'Te recomendamos "Mad Max: Fury Road".';
            }
            break;
        case 'comedia':
            if (age < 18) {
                recommendation = 'Te recomendamos "Los Goonies".';
            } else {
                recommendation = 'Te recomendamos "Superbad".';
            }
            break;
        case 'drama':
            if (age < 18) {
                recommendation = 'Te recomendamos "El Rey León".';
            } else {
                recommendation = 'Te recomendamos "La La Land".';
            }
            break;
        case 'terror':
            if (age < 18) {
                recommendation = 'Te recomendamos "Scooby-Doo".';
            } else {
                recommendation = 'Te recomendamos "El Conjuro".';
            }
            break;
        case 'musica':
            if (age < 18) {
                recommendation = 'Te recomendamos "High School Musical".';
            } else {
                recommendation = 'Te recomendamos "Bohemian Rhapsody".';
            }
            break;
        default:
            recommendation = 'Por favor, selecciona un género válido.';
    }

    // Mostrar la recomendación
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = recommendation;
});
