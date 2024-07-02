// Array de objetos con información de las asignaturas
const asignaturas = [
    // Primer nivel
    { nombre: 'Matemática Computacional', nivel: 1 },
    { nombre: 'Metodologías para Resolver Problemas Informáticos', nivel: 1 },
    { nombre: 'Base de Datos Relacionales', nivel: 1 },
    { nombre: 'Las Tics y Soporte en Hardware', nivel: 1 },
    { nombre: 'Programación de Interfaces Gráficas y Estructura de Datos', nivel: 1 },
    { nombre: 'Proyecto Integrador de Saberes: Creación de Aplicaciones de Escritorio', nivel: 1 },
    // Segundo nivel
    { nombre: 'Sistemas Digitales Programables', nivel: 2 },
    { nombre: 'Sistemas de Información', nivel: 2 },
    { nombre: 'Programación Orientada a Objetos', nivel: 2 },
    { nombre: 'Procesos Contables', nivel: 2 },
    { nombre: 'Gestión de Base de Datos', nivel: 2 },
    { nombre: 'Proyecto Integrador de Saberes: Creación de Aplicaciones de Escritorio con Base de Datos', nivel: 2 },
    // Tercer nivel
    { nombre: 'Programación de Aplicaciones para Dispositivos Móviles', nivel: 3 },
    { nombre: 'Probabilidades y Procesos Estocásticos', nivel: 3 },
    { nombre: 'Herramientas Informáticas para el Despliegue de Diagramas', nivel: 3 },
    { nombre: 'Aplicaciones Tecnológicas Autónomas', nivel: 3 },
    { nombre: 'Software Aplicativo', nivel: 3 },
    { nombre: 'Proyecto Integrador de Saberes: Creación de Aplicaciones Web con Base a la Arquitectura Cliente Servidor', nivel: 3 },
    { nombre: 'Prácticas Laborales', nivel: 3 },
    // Cuarto nivel
    { nombre: 'Comunicaciones y Redes de Datos', nivel: 4 },
    { nombre: 'Sistemas Operativos', nivel: 4 },
    { nombre: 'Herramientas CASE', nivel: 4 },
    { nombre: 'Derecho y Seguridad Informática', nivel: 4 },
    { nombre: 'Tendencias Tecnológicas', nivel: 4 },
    { nombre: 'Desarrollo de Proyectos de Software', nivel: 4 },
    { nombre: 'Unidad de Integración Curricular', nivel: 4 }
];

function obtenerNombresPorNivel(asignaturas, nivel) {
    const asignaturasFiltradas = asignaturas.filter(asignatura => asignatura.nivel === nivel);
    const nombres = asignaturasFiltradas.map(asignatura => asignatura.nombre);
    return nombres.join('\n'); // Unir nombres con salto de línea para el alert
}

alert('Asignaturas de Primer Nivel:\n' + obtenerNombresPorNivel(asignaturas, 1));
alert('Asignaturas de Segundo Nivel:\n' + obtenerNombresPorNivel(asignaturas, 2));
alert('Asignaturas de Tercer Nivel:\n' + obtenerNombresPorNivel(asignaturas, 3));
alert('Asignaturas de Cuarto Nivel:\n' + obtenerNombresPorNivel(asignaturas, 4));
