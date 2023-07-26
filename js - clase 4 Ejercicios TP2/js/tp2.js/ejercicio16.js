'use strict'

const texto = prompt("Ingrese un texto");
let inverso = '';

for (let i = texto.length - 1; i >= 0; i--) {
    inverso += texto.charAt(i);
}

console.log(`Texto al reves ${inverso}`);
