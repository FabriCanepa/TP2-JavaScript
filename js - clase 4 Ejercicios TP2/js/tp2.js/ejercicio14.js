'use strict'

const texto = prompt("Ingrese una cadena de texto:");
let guion = texto.charAt(0);

for (let i = 1; i < texto.length; i++) {
    guion += '-' + texto.charAt(i);
}

console.log(guion);
