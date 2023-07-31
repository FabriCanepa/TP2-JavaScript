'use strict'

let texto = prompt("Ingresa un texto")

const cadenaTexto = (texto) => {
    if (texto === texto.toUpperCase()) {
        document.write('El texto que ingresaste está en MAYÚSCULAS');
    } else if (texto === texto.toLowerCase()) {
        document.write('El texto que ingresaste está en MINÚSCULAS');
    } else {
        document.write('El texto que ingresaste tiene una mezcla de ambas');
    }
}   
    cadenaTexto(texto);

