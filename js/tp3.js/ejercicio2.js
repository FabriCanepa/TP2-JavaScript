'use strict'
let ciudades = []

while (true) {
    let ciudad = prompt("Ingresa el nombre de una ciudad")
    if (ciudad === null) {
        break;
    }

    ciudades.push(ciudad)
}


const ultimaCiudad = ciudades[ciudades.length - 1]
document.write(`El arreglo de ciudades tiene ${ciudades.length} elementos`)

document.write("<ul>")

document.write(`<li>Elemento 1er posición: ${ciudades[0]}</li>`)
document.write(`<li>Elemento 3er posición: ${ciudades[1]}</li>`)
document.write(`<li>Elemento última posición: ${ultimaCiudad} </li>`)
document.write(`<li>Elemento última posición: París </li>`)

document.write("</ul>")
document.write("<h1>Hola</h1>")