'use strict'

class Rectangulos {
    constructor (alto, ancho) {
        this.alto = alto,
        this.ancho = ancho
    }

    cambiarAlto (nuevoAlto) {
        if (0 > nuevoAlto) {
            this.alto = nuevoAlto
        } else {
            console.log('Ingresa un numero mayor a 0');
        }
    }

    cambiarAncho (nuevoAncho) {
        if (0 > nuevoAncho) {
            this.ancho = nuevoAncho
        } else {
            console.log('Ingresa un numero mayor a 0');
        }
    }

    propiedadesRectangulo () {
        console.log(`El ancho de tu rectangulo es ${this.ancho}`);
        console.log(`El alto de tu rectangulo es ${this.alto}`);
    }

    calcularPerimetro () {
        perimetro = this.alto + this.ancho
    }

    calcularArea () {
        area = this.alto * this.ancho
    }

    resultadoDelRectangulo (area, perimetro) {
        console.log(`El area del triangulo es ${area}`);
        console.log(`El perimetro del triangulo es ${perimetro}`);
    }
}

const rectangulo1 = new Rectangulos(5, 10);

rectangulo1.cambiarAlto(10)

//Me mareé al hacerlo y no sé que hice perdon