'use strict'

const auto = {
    color: "verde",
    marca: "Toyota",
    modelo: "Corolla",

    encendido: () => {
        document.write("Auto encendido <br>")
    },

    apagado: () => {
        document.write("Auto apagado")
    }
}

auto.encendido();
auto.apagado()

console.log(auto.modelo);
