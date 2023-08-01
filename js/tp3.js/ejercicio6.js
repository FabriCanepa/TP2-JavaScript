'use strict'

let num1 = prompt('Ingresa un número')
let num2 = prompt('Ingresa otro numero')

const perimetro = (num1, num2) => {
    num1 = Number(num1)
    num2 = Number(num2)

const total = (num1 + num2) * 2
    document.write(`El perimetro del rectangulo es ${total}`)
}
perimetro(num1, num2)

