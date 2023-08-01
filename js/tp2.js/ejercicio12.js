'use strict'
let nombreM = '';
let edadM = -3;

for (let i = 0; i < 3; i++) {
    let nombre = prompt("Ingrese un nombre");
    let edades = parseInt(prompt("Ingrese la edad de " + nombre));

    if (edades > edadM) {
    nombreM = nombre;
    edadM = edades;
    }
}

console.log(`El nombre del mayor es ${nombreM}`);
