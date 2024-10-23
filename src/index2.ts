type empleado = {
    nombre: string;
    salario: number;
};

// Creamos el objeto "empresa"
const empresa = {
    empleados: [] as empleado[], // Definimos el array empleados para que contenga objetos tipo "empleado"

    // Definimos la función para agregar empleados
    agregarEmpleado(nuevoEmpleado: empleado): void { 
        this.empleados.push(nuevoEmpleado);
    },

    // Definimos la función para buscar empleados por nombre
    encontrarEmpleado(nombre: string): empleado | undefined {
        return this.empleados.find(emp => emp.nombre === nombre); // Utilizamos el método find para buscar por nombre
    },

    // Definimos la función para calcular el salario promedio
    SalarioPromedio(): number {
        if (this.empleados.length === 0) return 0; // Si no hay empleados, retornamos 0
        const totalSalario = this.empleados.reduce((total, emp) => total + emp.salario, 0); // Sumamos todos los salarios
        return totalSalario / this.empleados.length; // Retornamos el promedio
    }
};

// Ejemplo de uso:
empresa.agregarEmpleado({ nombre: 'Juan', salario: 3000 });
empresa.agregarEmpleado({ nombre: 'Ana', salario: 4000 });
console.log(empresa.encontrarEmpleado('Juan')); // { nombre: 'Juan', salario: 3000 }
console.log(empresa.SalarioPromedio()); // 3500
