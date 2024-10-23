type reserva = {
    nombreHuesped: string;
    costoPorNoche: number;
    noches: number; // Para manejar la duración de la estancia
};

// Creamos el objeto "hotel"
const hotel = {
    reservas: [] as reserva[], // Definimos el array reservas para que contenga objetos tipo "reserva"

    // Definimos la función para agregar reservas
    agregarReserva(nuevaReserva: reserva): void { 
        this.reservas.push(nuevaReserva);
    },

    // Definimos la función para buscar reservas por nombre del huésped
    encontrarReserva(nombreHuesped: string): reserva | undefined {
        return this.reservas.find(res => res.nombreHuesped === nombreHuesped); // Utilizamos el método find para buscar por nombre
    },

    // Definimos la función para calcular el ingreso total del hotel
    calcularIngresoTotal(): number {
        return this.reservas.reduce((total, res) => total + (res.costoPorNoche * res.noches), 0); // Calculamos el ingreso total
    }
};

// Ejemplo de uso:
hotel.agregarReserva({ nombreHuesped: 'Juan', costoPorNoche: 100, noches: 3 });
hotel.agregarReserva({ nombreHuesped: 'Ana', costoPorNoche: 150, noches: 2 });
console.log(hotel.encontrarReserva('Juan')); // { nombreHuesped: 'Juan', costoPorNoche: 100, noches: 3 }
console.log(hotel.calcularIngresoTotal()); // 600
