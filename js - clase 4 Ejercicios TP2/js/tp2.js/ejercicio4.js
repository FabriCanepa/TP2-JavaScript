'use strict'


// let suma = 0
// while (true) {

//     let num = Number(prompt('Ingresa un numero '))

//     if (num === null) {
//         break;
//     }

//     if (isNaN(num)) {
//         alert('No se ingresó un número');
//     } else {
//         console.log(suma);
//         suma += num
//     }
// }

let suma = 0;
while (true) {
  let num = Number(prompt('Ingresa un número'));

  if (isNaN(num)) {
    if (num !== 0) {
      alert('No se ingresó un número válido');
    }
  } else {
    console.log(suma);
    suma += num;
  }
}
