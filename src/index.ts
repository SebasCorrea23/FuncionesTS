//Descripción: Crea un programa que gestione una biblioteca. El programa debe permitir agregar libros, buscar libros por título y mostrar todos los libros disponibles.

//definimos el "tipo" libro 
type libro ={
    titulo:string; 
    autor:string;
    año:number;
}

// creamos el Objeto "biblioteca"
const biblioteca ={
    libros: [] as libro[], // acá definimos el array libros para que contenga dentro de si obejtos tipo "libro" (as)
    
    //definimos la funcion para agregar libros
    agregarLibro(nuevoLibro:libro):void{ // le ponemos al parametro "nuevoLibro" que sea de tipo "libro" 
        this.libros.push(nuevoLibro)
    },

    //definimos la funcion para mostrar los libros
    obtenerLibro():libro[]{ // definimos "()" sin parametros, retornara un array del tipo "libro"
        return this.libros
    },

    //definimos la funcion para encontrar libro por su titulo
    encontrarLibro(titulo: string):libro|undefined{// la definimos con un unico parametro, retorna un "libro"
        return this.libros.find(libro => libro.titulo === titulo);//definimos el metodo find para el array "libros", toma cada "libro" del array y verifica si su propiedad coincide con el argumento
    }
}

// Agregar libros a la biblioteca
biblioteca.agregarLibro({ titulo: "Eternamente", autor: "Pablo Perez Rueda", año:2018 });
biblioteca.agregarLibro({ titulo: "Guerra y Paz", autor: "Leon Tolstoi", año:1867 });
biblioteca.agregarLibro({ titulo: "Mi Alma se la Dejo al Diablo", autor: "German Castro Caycedo", año:1982 });


// Obtener todos los libros y mostrarlos en la consola
console.log(biblioteca.obtenerLibro());

// Buscar un libro específico por su título
const libro = biblioteca.encontrarLibro("Eternamente");
console.log(libro); // Mostramos el libro encontrado


// Obtener nuevamente todos los libros para verificar que libro ha sido añadido
console.log(biblioteca.obtenerLibro());
