'use strict'

class Libro {
    constructor(ISBN, titulo, autor, numeroDePaginas) {
        this.ISBN = ISBN,
        this.titulo = titulo,
        this.autor = autor,
        this.numeroDePaginas = numeroDePaginas
    }

    mostrarLibro () {
        console.log(`El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.numeroDePaginas} páginas`);
    }
}

const libro1 = new Libro('978-1234567890', 'La Gallina Degollada', 'Horacio Quiroga', 15)
libro1.mostrarLibro()

const libro2 = new Libro('978-9876543210', 'Mi Planta de naranja lima', 'José Mauro de Vasconcelos', 200)
libro2.mostrarLibro()

if (libro1.numeroDePaginas > libro2.numeroDePaginas) {
    console.log('El libro 1 tiene más páginas');
} else if (libro2.numeroDePaginas > libro1.numeroDePaginas) {
    console.log('El libro 2 tiene más páginas');
} else {
    console.log('Los 2 libros tienen la misma cantidad de páginas');
}