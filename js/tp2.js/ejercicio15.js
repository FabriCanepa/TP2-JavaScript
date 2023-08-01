'use strict'

const texto = prompt("Ingrese un texto");
let totalVocal = 0;

for (let i = 0; i < texto.length; i++) {
    const caracter = texto.charAt(i).toLowerCase();
    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {totalVocal++;
    }
}

console.log(`Hay ${totalVocal} vocales en el texto`);
