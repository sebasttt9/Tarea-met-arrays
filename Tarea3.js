/*Crear una función que calcule el promedio de un conjunto de calificaciones almacenados en un array. 
La función debe recibir el array y devolver únicamente la parte entera del promedio.*/
const calificaciones = [79, 66, 91, 45, 77, 88]

function calcularPromedioEntero(calificaciones) {
    const sumatoria = calificaciones.reduce((total, calificacion) => total + calificacion, 0);
    const promedio = sumatoria / calificaciones.length;
    const promedioEntero = Math.floor(promedio);
    return promedioEntero;
}

const promedioEntero = calcularPromedioEntero(calificaciones);

alert(`El promedio entero de las calificaciones es: ${promedioEntero}`);
