type producto = {
    nombre: string;
    precio: number;
    cantidad: number; // Para manejar la cantidad en inventario
};

// Creamos el objeto "tienda"
const tienda = {
    productos: [] as producto[], // Definimos el array productos para que contenga objetos tipo "producto"

    // Definimos la función para agregar productos
    agregarProducto(nuevoProducto: producto): void { 
        this.productos.push(nuevoProducto);
    },

    // Definimos la función para buscar productos por nombre
    encontrarProducto(nombre: string): producto | undefined {
        return this.productos.find(prod => prod.nombre === nombre); // Utilizamos el método find para buscar por nombre
    },

    // Definimos la función para calcular el valor total del inventario
    calcularValorTotalInventario(): number {
        return this.productos.reduce((total, prod) => total + (prod.precio * prod.cantidad), 0); // Calculamos el valor total
    }
};

// Ejemplo de uso:
tienda.agregarProducto({ nombre: 'Laptop', precio: 1000, cantidad: 5 });
tienda.agregarProducto({ nombre: 'Teclado', precio: 50, cantidad: 10 });
console.log(tienda.encontrarProducto('Laptop')); // { nombre: 'Laptop', precio: 1000, cantidad: 5 }
console.log(tienda.calcularValorTotalInventario()); // 10500
