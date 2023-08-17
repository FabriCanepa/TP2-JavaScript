'use strict'

const cuenta = {
    titular: "Alex",
    saldo: 0,

    ingresar: function(dinero) {
        if (dinero > 0) {
            this.saldo += dinero;
        } else {
            console.log('Ingresa una cantidad mayor a 0');
        }
    },

    extraer: function(dinero) {
        if (dinero <= this.saldo) {
            this.saldo -= dinero;
        } else {
            console.log('Ingresa una cantidad ajustada a tu saldo actual');
        }
    },

    informar: function() {
        console.log(`El titular de la cuenta es ${this.titular}`);
        console.log(`Tu cuenta tiene $${this.saldo}`);
    }
}

cuenta.ingresar(2500)
cuenta.extraer(500)
cuenta.informar()

//No sé si se debia hacer así o habia una forma más sencilla 