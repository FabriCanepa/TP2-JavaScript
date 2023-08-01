'use strict'


let num = parseInt(prompt('Ingrese un numero'))

if (isNaN(num)) {
    console.log('Ingrese un número válido');
} else {
switch (num) {
    case 0:
    case 1:
    case 2: {
        console.log('Muy deficiente');
        break;
    }
    case 3:
    case 4: {
        console.log('Insuficiente');
        break;
    }
    case 5:
    case 6: {
        console.log('Suficiente');
        break;
    }
    case 7: {
        console.log('Bien');
        break;
    }
    case 8:
    case 9: {
        console.log('Notable');
        break;
    }
    case 10: {
        console.log('Sobresaliente');
        break;
    }
    default: {
        console.error('Número erróneo');
        }
    }
}