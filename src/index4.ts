type estudiante = {
    nombre: string;
    notas: number[]; // Un array para almacenar las notas del estudiante
};

// Creamos el objeto "escuela"
const escuela = {
    estudiantes: [] as estudiante[], // Definimos el array estudiantes para que contenga objetos tipo "estudiante"

    // Definimos la función para agregar estudiantes
    agregarEstudiante(nuevoEstudiante: estudiante): void { 
        this.estudiantes.push(nuevoEstudiante);
    },

    // Definimos la función para buscar estudiantes por nombre
    encontrarEstudiante(nombre: string): estudiante | undefined {
        return this.estudiantes.find(est => est.nombre === nombre); // Utilizamos el método find para buscar por nombre
    },

    // Definimos la función para calcular el promedio de notas de todos los estudiantes
    calcularPromedioNotas(): number {
        if (this.estudiantes.length === 0) return 0; // Si no hay estudiantes, retornamos 0
        const totalNotas = this.estudiantes.reduce((total, est) => total + est.notas.reduce((sum, nota) => sum + nota, 0), 0); // Sumamos todas las notas
        const totalEstudiantes = this.estudiantes.reduce((total, est) => total + est.notas.length, 0); // Contamos el total de notas
        return totalNotas / totalEstudiantes; // Retornamos el promedio
    }
};

// Ejemplo de uso:
escuela.agregarEstudiante({ nombre: 'Carlos', notas: [8, 9, 10] });
escuela.agregarEstudiante({ nombre: 'Ana', notas: [7, 8, 9] });
console.log(escuela.encontrarEstudiante('Carlos')); // { nombre: 'Carlos', notas: [8, 9, 10] }
console.log(escuela.calcularPromedioNotas()); // 8.666666666666666
