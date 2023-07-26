'use strict'

let edad = prompt('Ingrese su edad')

if (edad >= 18) {
    console.log('Usted ya puede conducir');
} else if (edad >=1 && edad <=17) {
    console.log('No tiene la edad suficiente para conducir');
} else {
    console.log('El numero ingresado no es valido');
}