'use strict'

let cadenasTexto = '';

while (true) {
    const cadena = prompt('Ingrese un texto');

    if (cadena === null) {
    break;
    } else {
    cadenasTexto += cadena + ' - ';
    }
}

if (cadenasTexto.length > 0) {
    cadenasTexto = cadenasTexto.slice(0, -1);
    console.log(cadenasTexto);
} else {
    console.log('No ingresó un texto');
}
