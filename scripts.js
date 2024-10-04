document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores de las actividades
    const activity1 = parseFloat(document.getElementById('activity1').value);
    const activity2 = parseFloat(document.getElementById('activity2').value);
    const activity3 = parseFloat(document.getElementById('activity3').value);

    // Calcular el promedio
    const average = (activity1 + activity2 + activity3) / 3;

    // Verificar si el promedio es del 35%
    const resultElement = document.getElementById('result');
    if (average >= 35) {
        resultElement.innerHTML = `Promedio: ${average.toFixed(2)} - Aprobado`;
    } else {
        resultElement.innerHTML = `Promedio: ${average.toFixed(2)} - Reprobado`;
    }
});


