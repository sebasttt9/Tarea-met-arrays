// Array de calificaciones
const calificaciones = [79, 66, 91, 45, 77, 88];

// Función para calcular el promedio y devolver la parte entera
function calcularPromedioEntero(calificaciones) {
    const sumatoria = calificaciones.reduce((total, calificacion) => total + calificacion, 0);
    const promedio = sumatoria / calificaciones.length;
    const promedioEntero = Math.floor(promedio);
    return promedioEntero;
}

// Calcular el promedio entero de las calificaciones
const promedioEntero = calcularPromedioEntero(calificaciones);

// Mostrar el resultado en un alert
alert(`El promedio entero de las calificaciones es: ${promedioEntero}`);
