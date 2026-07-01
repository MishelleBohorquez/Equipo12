const prompt = require("prompt-sync")();

let activo = true;

while (activo) {

    let numero1 = Number(prompt("Ingrese el primer número: "));
    let operacion = prompt("Ingrese la operación (+, -, *, /): ");
    let numero2 = Number(prompt("Ingrese el segundo número: "));

    let resultado;

    if (operacion === "+") {
        resultado = numero1 + numero2;
    } else if (operacion === "-") {
        resultado = numero1 - numero2;
    } else if (operacion === "*") {
        resultado = numero1 * numero2;
    } else if (operacion === "/") {
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
        } else {
            console.log("No se puede dividir entre cero.");
            continue;
        }
    } else {
        console.log("Operación no válida.");
        continue;
    }

    console.log("Resultado:", resultado);

    let respuesta = prompt("¿Desea realizar otra operación? (si/no): ");

    if (respuesta.toLowerCase() === "no") {
        activo = false;
    }
}

console.log("Hasta luego");