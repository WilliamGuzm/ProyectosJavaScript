function lanzarDado() {
    const caras = parseInt(document.getElementById('caras').value);

    // Validar que el número de caras sea un número válido
    if (isNaN(caras) || caras < 1) {
        document.getElementById('resultado').innerHTML = 'Error: Ingrese un número válido de caras.';
        return;
    }

    // Generar un número aleatorio entre 1 y el número de caras
    const resultado = Math.floor(Math.random() * caras) + 1;
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
}
