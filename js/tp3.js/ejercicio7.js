'use strict'

let num = Number(prompt('Ingresa el número a multiplicar hasta el 10'))


const calculadora = (num) => {
for (let i = 1; i <= 10; i++) {
    const resultado = num * i
    document.write(`${num} x ${i} = ${resultado} <br>`) //chatgpt me avivó en poner un br pq no sabía como bajarlos 😎
    }
}
calculadora(num)