'use strict'

const texto = prompt("Ingrese un texto");
let vocal = '';
let posicionVocal = -300;

for (let i = 0; i < texto.length; i++) {
    const caracter = texto.charAt(i).toLowerCase();
    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
    vocal = caracter;
    posicionVocal = i;
    break; 
    }
}

if (posicionVocal !== -300) {
    console.log(`La vocal '${vocal}' está en la posición ${posicionVocal}`);
} else {
    console.error("No se encontraron vocales en el texto.");
}
