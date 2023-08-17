'use strict'

class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
        imprimir () {
            console.log(`${this.nombre}: Código ${this.codigo} - Precio ${this.precio}`);
        }
    }


const taza = new Producto('A9876', 'Taza roja', 280)
const mouse = new Producto('P1F63', 'Logitech G203', 8400)
const silla = new Producto('1C747', 'Silla de escritorio', 12700)

const productos = [taza, mouse, silla]

for (let i = 0; i < productos.length; i+=1) {
    productos[i].imprimir();
}